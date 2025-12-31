namespace House_of_law_api.DTOs;

/// <summary>
/// Pagination Parameters - معاملات التصفح
/// </summary>
public class PaginationParams
{
    private const int MaxPageSize = 100;
    private int _pageSize = 10;

    /// <summary>
    /// رقم الصفحة (يبدأ من 1)
    /// </summary>
    public int PageNumber { get; set; } = 1;

    /// <summary>
    /// عدد العناصر في الصفحة (10-100)
    /// </summary>
    public int PageSize
    {
        get => _pageSize;
        set => _pageSize = value > MaxPageSize ? MaxPageSize : value < 1 ? 10 : value;
    }

    /// <summary>
    /// عدد العناصر التي يجب تخطيها (Skip)
    /// </summary>
    public int Skip => (PageNumber - 1) * PageSize;
}

/// <summary>
/// Paginated Response - الاستجابة مع معلومات الصفحات
/// </summary>
public class PagedResponse<T>
{
    public IEnumerable<T> Data { get; set; } = new List<T>();
    
    /// <summary>
    /// رقم الصفحة الحالية
    /// </summary>
    public int PageNumber { get; set; }
    
    /// <summary>
    /// عدد العناصر في الصفحة
    /// </summary>
    public int PageSize { get; set; }
    
    /// <summary>
    /// إجمالي عدد العناصر
    /// </summary>
    public int TotalCount { get; set; }
    
    /// <summary>
    /// إجمالي عدد الصفحات
    /// </summary>
    public int TotalPages => (int)Math.Ceiling(TotalCount / (double)PageSize);
    
    /// <summary>
    /// هل يوجد صفحة سابقة؟
    /// </summary>
    public bool HasPrevious => PageNumber > 1;
    
    /// <summary>
    /// هل يوجد صفحة تالية؟
    /// </summary>
    public bool HasNext => PageNumber < TotalPages;
}

