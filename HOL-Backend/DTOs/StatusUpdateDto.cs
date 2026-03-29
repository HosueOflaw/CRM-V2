namespace House_of_law_api.DTOs
{
    public class StatusUpdateDto
    {
        public string Field { get; set; } // Cooperation, Contact, Civil, Internal, Work
        public int? NewValueId { get; set; } // For lookups
        public string NewValueText { get; set; } // For free text like 'Work'
    }
}
