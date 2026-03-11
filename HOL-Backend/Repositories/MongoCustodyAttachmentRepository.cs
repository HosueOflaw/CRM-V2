using House_of_law_api.Interfaces;
using House_of_law_api.Modules;
using MongoDB.Driver;

namespace House_of_law_api.Repositories;

public class MongoCustodyAttachmentRepository : IMongoCustodyAttachmentRepository
{
    private readonly IMongoCollection<MongoCustodyAttachment> _collection;

    public MongoCustodyAttachmentRepository(IMongoClient client, IConfiguration config)
    {
        var dbName = config["MongoDbSettings:DatabaseName"];
        var database = client.GetDatabase(dbName);
        _collection = database.GetCollection<MongoCustodyAttachment>("custody_attachments");
    }

    public async Task<MongoCustodyAttachment> GetByCodeAsync(string code)
    {
        return await _collection.Find(x => x.Code == code).FirstOrDefaultAsync();
    }

    public async Task<MongoCustodyAttachment> AddAsync(MongoCustodyAttachment entity)
    {
        await _collection.InsertOneAsync(entity);
        return entity;
    }

    public async Task<bool> DeleteAsync(string code)
    {
        var result = await _collection.DeleteOneAsync(x => x.Code == code);
        return result.DeletedCount > 0;
    }
}
