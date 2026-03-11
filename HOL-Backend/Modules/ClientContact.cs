using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Modules;

[Table("client_contacts")]
public class ClientContact
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("client_id")]
    public long ClientId { get; set; }

    [ForeignKey("ClientId")]
    public virtual Client Client { get; set; }

    [Required]
    [Column("phone")]
    public string Phone { get; set; }

    [Column("relation")]
    public string Relation { get; set; }
}
