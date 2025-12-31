using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace House_of_law_api.Infrastructure.Swagger;

public class SwaggerIgnoreSchemaFilter : ISchemaFilter
{
    public void Apply(OpenApiSchema schema, SchemaFilterContext context)
    {
        if (context.Type == typeof(Microsoft.AspNetCore.Http.IFormFile) ||
            context.Type == typeof(Microsoft.AspNetCore.Http.IFormFileCollection))
        {
            schema.Type = "string";
            schema.Format = "binary";
        }
    }
}
