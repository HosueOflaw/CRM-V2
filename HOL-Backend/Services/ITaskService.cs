
namespace House_of_law_api.Interfaces;

public interface ITaskService
{
  Task<object> CreateTaskAsync(int supervisorId, CreateTaskDto dto);
  Task<IEnumerable<EmployeeTaskDto>> GetTasksAsync(int userId, string status = null, string priority = null, DateTime? date = null, DateTime? startDate = null, DateTime? endDate = null);
  Task<EmployeeTaskDto> GetTaskByIdAsync(int userId, int taskId);
  Task<EmployeeTaskDto> UpdateTaskAsync(int userId, int taskId, UpdateTaskDto dto);
  Task<EmployeeTaskDto> UpdateTaskStatusAsync(int userId, int taskId, UpdateTaskStatusDto dto);
  Task<bool> DeleteTaskAsync(int userId, int taskId);
}
