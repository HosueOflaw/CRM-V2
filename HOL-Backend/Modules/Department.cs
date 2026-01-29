
[Table("departments")]
public class Department
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("code")]
  public int? Code { get; set; }

  [Column("name")]
  public string Name { get; set; }
}
