

namespace House_of_law_api.Data;

public class ApplicationDbContext : DbContext
{
  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
  {
  }

  public DbSet<User> Users => Set<User>();
  public DbSet<Department> Departments => Set<Department>();
  public DbSet<Client> Clients => Set<Client>();
  public DbSet<Mainfile> Mainfiles => Set<Mainfile>();
  public DbSet<FileDetail> FileDetails => Set<FileDetail>();
  public DbSet<AutoNumber> AutoNumbers => Set<AutoNumber>();
  public DbSet<Note> Notes => Set<Note>();
  public DbSet<Mail> Mails => Set<Mail>();
  public DbSet<Attachment> Attachments => Set<Attachment>();
  public DbSet<AuditsFile> AuditsFiles => Set<AuditsFile>();
  public DbSet<FileStatus> FileStatuses => Set<FileStatus>();
  public DbSet<FileClassification> FileClassifications => Set<FileClassification>();
  public DbSet<CallcenterStatement> CallcenterStatements => Set<CallcenterStatement>();
  public DbSet<AdditionalAmount> AdditionalAmounts => Set<AdditionalAmount>();
  public DbSet<Payment> Payments => Set<Payment>();
  public DbSet<UserBreak> UserBreaks => Set<UserBreak>();
  public DbSet<PermissionRequest> PermissionRequests => Set<PermissionRequest>();
  public DbSet<EmployeeTask> EmployeeTasks { get; set; }
  public DbSet<LoginHistory> LoginHistories { get; set; }
  public DbSet<ImportJob> ImportJobs { get; set; }
  public DbSet<ClientContact> ClientContacts { get; set; }
  public DbSet<ClientFinancialDetail> ClientFinancialDetails { get; set; }
  public DbSet<CustodyStatement> CustodyStatements => Set<CustodyStatement>();
  public DbSet<LookupValue> LookupValues => Set<LookupValue>();

  // Status History Tables
  public DbSet<House_of_law_api.Modules.ClientStatusHistory> ClientStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.ClaimStatusHistory> ClaimStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.PaymentStatusHistory> PaymentStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.FileStatusHistory> FileStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.ActionStatusHistory> ActionStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.FollowUpStatusHistory> FollowUpStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.InternalStatusHistory> InternalStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.CivilStatusHistory> CivilStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.ContactStatusHistory> ContactStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.CooperationStatusHistory> CooperationStatusHistories { get; set; }
  public DbSet<House_of_law_api.Modules.DiscountHistory> DiscountHistories { get; set; }
  public DbSet<House_of_law_api.Modules.AcceptanceHistory> AcceptanceHistories { get; set; }
  public DbSet<House_of_law_api.Modules.JobHistory> JobHistories { get; set; }
  public DbSet<House_of_law_api.Modules.SalaryHistory> SalaryHistories { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<CustodyStatement>().Property(x => x.Amount)
        .HasColumnType("decimal(18,3)");

    modelBuilder.Entity<FileDetail>().Property(x => x.DeptAmount)
        .HasColumnType("decimal(18,3)");

    modelBuilder.Entity<CallcenterStatement>().Property(x => x.PromiseAmount)
        .HasColumnType("decimal(18,3)");

    modelBuilder.Entity<AdditionalAmount>().Property(x => x.Value)
        .HasColumnType("decimal(18,3)");

    modelBuilder.Entity<Payment>().Property(x => x.Value)
        .HasColumnType("decimal(18,3)");

    modelBuilder.Entity<Client>().Property(x => x.FinancialAmount)
        .HasColumnType("decimal(18,3)");

    // Performance Indexes
    modelBuilder.Entity<LoginHistory>().HasIndex(x => x.LoginTime);
    modelBuilder.Entity<LoginHistory>().HasIndex(x => x.UserId);

    // Relationships
    modelBuilder.Entity<ClientContact>()
        .HasOne(c => c.Client)
        .WithMany(cl => cl.ClientContacts)
        .HasForeignKey(c => c.ClientId);
  }
}
