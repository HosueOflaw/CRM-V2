namespace House_of_law_api.DTOs;

public class DepartmentDto
{
    public int Id { get; set; }
    public int? Code { get; set; }
    public string Name { get; set; }
}

public class CreateDepartmentDto
{
    public int? Code { get; set; }
    public string Name { get; set; }
}
