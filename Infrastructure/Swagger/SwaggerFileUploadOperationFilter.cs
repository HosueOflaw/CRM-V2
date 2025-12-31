using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;

namespace House_of_law_api.Infrastructure.Swagger;

public class SwaggerFileUploadOperationFilter : IOperationFilter
{
    public void Apply(OpenApiOperation operation, OperationFilterContext context)
    {
        var methodInfo = context.MethodInfo;
        if (methodInfo == null) return;

        // Check if method has Consumes("multipart/form-data") attribute
        var consumesAttribute = methodInfo.GetCustomAttribute<ConsumesAttribute>();
        var hasMultipartFormData = consumesAttribute?.ContentTypes?.Contains("multipart/form-data") == true;

        var parameters = methodInfo.GetParameters();
        var hasFileUpload = parameters.Any(p => 
            p.ParameterType == typeof(IFormFile) || 
            p.ParameterType == typeof(IFormFileCollection));

        // Also check if any parameter has [FromForm] attribute
        var hasFromForm = parameters.Any(p => p.GetCustomAttribute<FromFormAttribute>() != null);

        if (!hasFileUpload && !hasFromForm && !hasMultipartFormData) return;

        // Remove all form parameters from operation.Parameters (they will be in request body)
        // Include IFormFile (even without [FromForm]) and [FromForm] parameters
        var formParamNames = parameters
            .Where(p => p.GetCustomAttribute<FromFormAttribute>() != null || 
                       (p.ParameterType == typeof(IFormFile) || p.ParameterType == typeof(IFormFileCollection)))
            .Select(p => p.Name)
            .Where(n => n != null)
            .ToList();

        foreach (var paramName in formParamNames)
        {
            var param = operation.Parameters.FirstOrDefault(p => p.Name == paramName);
            if (param != null)
            {
                operation.Parameters.Remove(param);
            }
        }

        // Create or update multipart/form-data request body
        if (operation.RequestBody == null)
        {
            operation.RequestBody = new OpenApiRequestBody
            {
                Content = new Dictionary<string, OpenApiMediaType>()
            };
        }

        if (!operation.RequestBody.Content.ContainsKey("multipart/form-data"))
        {
            operation.RequestBody.Content["multipart/form-data"] = new OpenApiMediaType
            {
                Schema = new OpenApiSchema
                {
                    Type = "object",
                    Properties = new Dictionary<string, OpenApiSchema>(),
                    Required = new HashSet<string>()
                }
            };
        }

        var schema = operation.RequestBody.Content["multipart/form-data"].Schema;
        if (schema.Properties == null)
        {
            schema.Properties = new Dictionary<string, OpenApiSchema>();
        }
        if (schema.Required == null)
        {
            schema.Required = new HashSet<string>();
        }

        // Add IFormFile parameters (without [FromForm] attribute)
        foreach (var param in parameters.Where(p => 
            (p.ParameterType == typeof(IFormFile) || p.ParameterType == typeof(IFormFileCollection)) &&
            p.GetCustomAttribute<FromFormAttribute>() == null))
        {
            schema.Properties[param.Name!] = new OpenApiSchema
            {
                Type = "string",
                Format = "binary",
                Description = "File to upload"
            };
            schema.Required.Add(param.Name!);
        }

        // Add [FromForm] parameters (excluding IFormFile)
        foreach (var param in parameters.Where(p => 
            p.GetCustomAttribute<FromFormAttribute>() != null &&
            p.ParameterType != typeof(IFormFile) &&
            p.ParameterType != typeof(IFormFileCollection)))
        {
            var swaggerType = GetSwaggerType(param.ParameterType);
            schema.Properties[param.Name!] = new OpenApiSchema
            {
                Type = swaggerType,
                Description = param.Name
            };

            // Add to required if not nullable and has Required attribute
            if (!IsNullable(param.ParameterType) && param.GetCustomAttribute<RequiredAttribute>() != null)
            {
                schema.Required.Add(param.Name!);
            }
        }
    }

    private string GetSwaggerType(Type type)
    {
        // Handle nullable types
        var underlyingType = Nullable.GetUnderlyingType(type) ?? type;

        if (underlyingType == typeof(string))
            return "string";
        if (underlyingType == typeof(int) || underlyingType == typeof(short) || underlyingType == typeof(byte))
            return "integer";
        if (underlyingType == typeof(long))
            return "integer";
        if (underlyingType == typeof(bool))
            return "boolean";
        if (underlyingType == typeof(decimal) || underlyingType == typeof(double) || underlyingType == typeof(float))
            return "number";
        if (underlyingType == typeof(DateTime) || underlyingType == typeof(DateTimeOffset))
            return "string";
        
        return "string";
    }

    private bool IsNullable(Type type)
    {
        return Nullable.GetUnderlyingType(type) != null || 
               !type.IsValueType || 
               (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>));
    }
}
