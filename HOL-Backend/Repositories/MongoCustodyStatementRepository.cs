using House_of_law_api.Interfaces;
using House_of_law_api.Modules;
using MongoDB.Driver;
using System.Linq.Expressions;
using Microsoft.Extensions.Options;

namespace House_of_law_api.Repositories;

public class MongoCustodyStatementRepository : ICustodyStatementRepository
{
    private readonly IMongoCollection<CustodyStatement> _collection;

    public MongoCustodyStatementRepository(IMongoClient client, IConfiguration config)
    {
        var dbName = config["MongoDbSettings:DatabaseName"];
        var database = client.GetDatabase(dbName);
        _collection = database.GetCollection<CustodyStatement>("custody_statements");
    }

    public async Task<CustodyStatement> GetByIdAsync(int id)
    {
        return await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();
    }

    public async Task<CustodyStatement> GetByIdAsync(long id)
    {
        return await _collection.Find(x => (long)x.Id == id).FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetAllAsync()
    {
        return await _collection.Find(_ => true).ToListAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> FindAsync(Expression<Func<CustodyStatement, bool>> predicate)
    {
        return await _collection.Find(predicate).ToListAsync();
    }

    public async Task<CustodyStatement> FirstOrDefaultAsync(Expression<Func<CustodyStatement, bool>> predicate)
    {
        return await _collection.Find(predicate).FirstOrDefaultAsync();
    }

    public async Task<CustodyStatement> AddAsync(CustodyStatement entity)
    {
        // For MongoDB, if we use int Id, we might need a counter or just find Max(Id) + 1
        // To keep it simple for this demonstration, we'll find the current max and increment.
        // In production, a dedicated counters collection is better.
        var last = await _collection.Find(_ => true).SortByDescending(x => x.Id).Limit(1).FirstOrDefaultAsync();
        entity.Id = (last?.Id ?? 0) + 1;
        
        await _collection.InsertOneAsync(entity);
        return entity;
    }

    public async Task<IEnumerable<CustodyStatement>> AddRangeAsync(IEnumerable<CustodyStatement> entities)
    {
        var last = await _collection.Find(_ => true).SortByDescending(x => x.Id).Limit(1).FirstOrDefaultAsync();
        int currentId = (last?.Id ?? 0) + 1;

        foreach (var entity in entities)
        {
            entity.Id = currentId++;
        }

        await _collection.InsertManyAsync(entities);
        return entities;
    }

    public async Task UpdateAsync(CustodyStatement entity)
    {
        await _collection.ReplaceOneAsync(x => x.Id == entity.Id, entity);
    }

    public async Task DeleteAsync(CustodyStatement entity)
    {
        await _collection.DeleteOneAsync(x => x.Id == entity.Id);
    }

    public async Task DeleteAsync(int id)
    {
        await _collection.DeleteOneAsync(x => x.Id == id);
    }

    public async Task DeleteAsync(long id)
    {
        await _collection.DeleteOneAsync(x => (long)x.Id == id);
    }

    public async Task<int> CountAsync()
    {
        return (int)await _collection.CountDocumentsAsync(_ => true);
    }

    public async Task<int> CountAsync(Expression<Func<CustodyStatement, bool>> predicate)
    {
        return (int)await _collection.CountDocumentsAsync(predicate);
    }

    public async Task<bool> ExistsAsync(Expression<Func<CustodyStatement, bool>> predicate)
    {
        return await _collection.Find(predicate).AnyAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetByStatementNoAsync(string statementNo)
    {
        return await _collection.Find(x => x.StatementNo == statementNo && x.Enabled)
                                .SortByDescending(x => x.DateAdded)
                                .ToListAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetByAutoNoAsync(long autoNo)
    {
        return await _collection.Find(x => x.CodeAutoNo == autoNo && x.Enabled)
                                .SortByDescending(x => x.DateAdded)
                                .ToListAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetReportDataAsync(long? companyCode, int? expenseType)
    {
        var filterBuilder = Builders<CustodyStatement>.Filter;
        var filter = filterBuilder.And(
            filterBuilder.Eq(x => x.Enabled, true),
            filterBuilder.Eq(x => x.SendToCompany, false),
            filterBuilder.Eq(x => x.CompanyOrOffice, false)
        );

        if (companyCode.HasValue)
        {
            filter &= filterBuilder.Eq(x => x.CompanyCode, companyCode.Value);
        }

        if (expenseType.HasValue)
        {
            filter &= filterBuilder.Eq(x => x.CodeExpense, expenseType.Value);
        }

        return await _collection.Find(filter)
                                .SortByDescending(x => x.DateAdded)
                                .ToListAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetByUserAddedAsync(int userId)
    {
        return await _collection.Find(x => x.UserAdded == userId && x.Enabled)
                                .SortByDescending(x => x.DateAdded)
                                .ToListAsync();
    }

    public async Task<(IEnumerable<CustodyStatement> Items, int TotalCount)> GetPendingAsync(int userId, int page, int pageSize)
    {
        var filter = Builders<CustodyStatement>.Filter.And(
            Builders<CustodyStatement>.Filter.Eq(x => x.UserAdded, userId),
            Builders<CustodyStatement>.Filter.Eq(x => x.Enabled, true),
            Builders<CustodyStatement>.Filter.Eq(x => x.SendToACC, false)
        );

        var totalCount = (int)await _collection.CountDocumentsAsync(filter);
        var items = await _collection.Find(filter)
                                    .SortByDescending(x => x.DateAdded)
                                    .Skip((page - 1) * pageSize)
                                    .Limit(pageSize)
                                    .ToListAsync();

        return (items, totalCount);
    }

    public async Task<(IEnumerable<CustodyStatement> Items, int TotalCount)> GetTransferredAsync(int userId, int page, int pageSize, DateTime? fromDate = null, DateTime? toDate = null, bool? isReceived = null)
    {
        var filterBuilder = Builders<CustodyStatement>.Filter;
        var filter = filterBuilder.And(
            filterBuilder.Eq(x => x.UserAdded, userId),
            filterBuilder.Eq(x => x.Enabled, true),
            filterBuilder.Eq(x => x.SendToACC, true)
        );

        if (fromDate.HasValue)
            filter = filterBuilder.And(filter, filterBuilder.Gte(x => x.DateAdded, fromDate.Value.Date));
            
        if (toDate.HasValue)
            filter = filterBuilder.And(filter, filterBuilder.Lt(x => x.DateAdded, toDate.Value.Date.AddDays(1)));
            
        if (isReceived.HasValue)
            filter = filterBuilder.And(filter, filterBuilder.Eq(x => x.ReceiveAcc, isReceived.Value));

        var totalCount = (int)await _collection.CountDocumentsAsync(filter);
        var items = await _collection.Find(filter)
                                    .SortByDescending(x => x.DateAdded)
                                    .Skip((page - 1) * pageSize)
                                    .Limit(pageSize)
                                    .ToListAsync();

        return (items, totalCount);
    }

    public async Task<string> GetLastStatementNoAsync()
    {
        var last = await _collection.Find(x => x.StatementNo != null)
                                    .SortByDescending(x => x.Id)
                                    .Limit(1)
                                    .FirstOrDefaultAsync();
        return last?.StatementNo;
    }
}
