using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Modules
{
    [Table("lookup_values")]
    public class LookupValue
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("type")]
        public string Type { get; set; } // e.g., COOPERATION, CONTACT, CIVIL, INTERNAL

        [Required]
        [Column("code")]
        public string Code { get; set; } // The numeric or short code for the status

        [Required]
        [Column("name")]
        public string Name { get; set; } // The human-readable name in Arabic

        [Column("description")]
        public string Description { get; set; }

        [Column("is_active")]
        public bool IsActive { get; set; } = true;

        [Column("created_at")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
