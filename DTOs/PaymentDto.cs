namespace House_of_law_api.DTOs;

public class PaymentDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public decimal? Value { get; set; }
    public DateTime? DateAdded { get; set; }
    public string? JouralEntry { get; set; }
    public string? AlEntry { get; set; }
    public int? UserAdded { get; set; }
    public string? FileStatusAfter { get; set; }
}

public class CreatePaymentDto
{
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public decimal Value { get; set; }
    public string? JouralEntry { get; set; }
    public string? AlEntry { get; set; }
    public int? UserAdded { get; set; }
    public string? FileStatusAfter { get; set; }
}
