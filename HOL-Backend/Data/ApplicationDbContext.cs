using House_of_law_api.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
    public DbSet<Department> Departments => Set<Department>();
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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<FileDetail>().Property(x => x.DeptAmount)
            .HasColumnType("decimal(18,3)");

        modelBuilder.Entity<CallcenterStatement>().Property(x => x.PromiseAmount)
            .HasColumnType("decimal(18,3)");

        modelBuilder.Entity<AdditionalAmount>().Property(x => x.Value)
            .HasColumnType("decimal(18,3)");

        modelBuilder.Entity<Payment>().Property(x => x.Value)
            .HasColumnType("decimal(18,3)");

        // Configure EmployeeTask to avoid cascade delete conflicts
        modelBuilder.Entity<EmployeeTask>()
            .HasOne(t => t.AssignedTo)
            .WithMany()
            .HasForeignKey(t => t.AssignedToId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<EmployeeTask>()
            .HasOne(t => t.CreatedBy)
            .WithMany()
            .HasForeignKey(t => t.CreatedById)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
