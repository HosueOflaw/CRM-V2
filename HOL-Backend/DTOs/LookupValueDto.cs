using System;

namespace House_of_law_api.DTOs
{
    public class LookupValueDto
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
