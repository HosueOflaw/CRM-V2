using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Modules
{
    public abstract class StatusHistoryBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("file_code")]
        public long FileCode { get; set; }

        [Column("status_id")]
        public int StatusId { get; set; }

        [Column("status_name")]
        public string StatusName { get; set; }

        [Column("user_id")]
        public int? UserId { get; set; }

        [Column("user_name")]
        public string UserName { get; set; }

        [Column("date_added")]
        public DateTime DateAdded { get; set; } = DateTime.UtcNow;
    }

    [Table("client_status_history")]
    public class ClientStatusHistory : StatusHistoryBase { }

    [Table("claim_status_history")]
    public class ClaimStatusHistory : StatusHistoryBase { }

    [Table("payment_status_history")]
    public class PaymentStatusHistory : StatusHistoryBase { }

    [Table("file_status_history")]
    public class FileStatusHistory : StatusHistoryBase { }

    [Table("action_status_history")]
    public class ActionStatusHistory : StatusHistoryBase { }

    [Table("followup_status_history")]
    public class FollowUpStatusHistory : StatusHistoryBase { }

    [Table("internal_status_history")]
    public class InternalStatusHistory : StatusHistoryBase { }

    [Table("civil_status_history")]
    public class CivilStatusHistory : StatusHistoryBase { }

    [Table("contact_status_history")]
    public class ContactStatusHistory : StatusHistoryBase { }

    [Table("cooperation_status_history")]
    public class CooperationStatusHistory : StatusHistoryBase { }

    [Table("discount_history")]
    public class DiscountHistory : StatusHistoryBase { }

    [Table("acceptance_history")]
    public class AcceptanceHistory : StatusHistoryBase { }

    [Table("job_history")]
    public class JobHistory : StatusHistoryBase { }

    [Table("salary_history")]
    public class SalaryHistory : StatusHistoryBase { }
}
