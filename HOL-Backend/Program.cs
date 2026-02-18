// var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddDbContextPool<ApplicationDbContext>(options =>
// {
//   var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//   options.UseSqlServer(connectionString, sqlOptions =>
//   {
//     sqlOptions.EnableRetryOnFailure(
//           maxRetryCount: 3,
//           maxRetryDelay: TimeSpan.FromSeconds(30),
//           errorNumbersToAdd: null);
//   });
//   // Don't validate connection on startup for Swagger
//   options.EnableSensitiveDataLogging(builder.Environment.IsDevelopment());
// });

// builder.Services.AddMemoryCache();

// builder.Services.Configure<CloudflareOptions>(builder.Configuration.GetSection("Cloudflare"));

// // تسجيل Repositories
// builder.Services.AddScoped<IUserRepository, UserRepository>();
// builder.Services.AddScoped<IPaymentRepository, PaymentRepository>();
// builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
// builder.Services.AddScoped<IMainfileRepository, MainfileRepository>();
// builder.Services.AddScoped<IFileDetailRepository, FileDetailRepository>();
// builder.Services.AddScoped<INoteRepository, NoteRepository>();
// builder.Services.AddScoped<IMailRepository, MailRepository>();
// builder.Services.AddScoped<IAttachmentRepository, AttachmentRepository>();
// builder.Services.AddScoped<IAutoNumberRepository, AutoNumberRepository>();
// builder.Services.AddScoped<IFileStatusRepository, FileStatusRepository>();
// builder.Services.AddScoped<IFileClassificationRepository, FileClassificationRepository>();
// builder.Services.AddScoped<ICallcenterStatementRepository, CallcenterStatementRepository>();
// builder.Services.AddScoped<IAdditionalAmountRepository, AdditionalAmountRepository>();
// builder.Services.AddScoped<IAuditsFileRepository, AuditsFileRepository>();

// // تسجيل Services
// builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
// builder.Services.AddScoped<IJwtService, JwtService>();
// builder.Services.AddScoped<IUserService, UserService>();
// builder.Services.AddScoped<IClientService, ClientService>();
// builder.Services.AddScoped<INotificationService, NotificationService>();

// var corsOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];

// builder.Services.AddCors(options =>
// {
//   options.AddPolicy("Frontend", policy =>
//   {
//     policy.AllowAnyHeader()
//             .AllowAnyMethod()
//             .SetPreflightMaxAge(TimeSpan.FromHours(24)); // Cache preflight for 24 hours

//     if (corsOrigins.Length == 0)
//     {
//       // Development: Allow all origins (no credentials)
//       policy.AllowAnyOrigin();
//     }
//     else
//     {
//       // Production: Allow specific origins with credentials
//       policy.WithOrigins(corsOrigins)
//               .AllowCredentials();
//     }
//   });
// });

// // JWT Authentication Configuration
// var jwtSecretKey = builder.Configuration["Jwt:SecretKey"]
//     ?? throw new InvalidOperationException("JWT SecretKey not configured");

// builder.Services.AddAuthentication(options =>
// {
//   options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//   options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
// })
// .AddJwtBearer(options =>
// {
//   options.TokenValidationParameters = new TokenValidationParameters
//   {
//     ValidateIssuerSigningKey = true,
//     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecretKey)),
//     ValidateIssuer = true,
//     ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "HouseOfLawAPI",
//     ValidateAudience = true,
//     ValidAudience = builder.Configuration["Jwt:Audience"] ?? "HouseOfLawClient",
//     ValidateLifetime = true,
//     ClockSkew = TimeSpan.Zero
//   };

//   options.Events = new JwtBearerEvents
//   {
//     OnMessageReceived = context =>
//     {
//       var accessToken = context.Request.Query["access_token"];

//       // If the request is for our hub...
//       var path = context.HttpContext.Request.Path;
//       if (!string.IsNullOrEmpty(accessToken) &&
//               (path.StartsWithSegments("/hubs/notifications")))
//       {
//         // Read the token out of the query string
//         context.Token = accessToken;
//       }
//       return Task.CompletedTask;
//     }
//   };
// });

// // Authorization Configuration
// builder.Services.AddAuthorization(options =>
// {
//   // Default policy: require authentication
//   options.FallbackPolicy = null; // Don't require auth by default - use [Authorize] explicitly

//   // Admin policy
//   options.AddPolicy("AdminOnly", policy => policy.RequireRole("admin"));

//   // User policy (authenticated users)
//   options.AddPolicy("UserOnly", policy => policy.RequireAuthenticatedUser());
// });
// builder.Services.AddSignalR(options =>
// {
//   options.EnableDetailedErrors = builder.Environment.IsDevelopment();
//   options.KeepAliveInterval = TimeSpan.FromSeconds(15);
//   options.ClientTimeoutInterval = TimeSpan.FromSeconds(30);
//   options.HandshakeTimeout = TimeSpan.FromSeconds(15);
// });
// builder.Services.AddSingleton<IUserIdProvider, CustomUserIdProvider>();
// builder.Services.AddScoped<IEmailService, EmailService>();
// builder.Services.AddScoped<IBreakService, BreakService>();
// builder.Services.AddScoped<IPermissionService, PermissionService>();
// builder.Services.AddScoped<ITaskService, TaskService>();
// builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.MainfileImportWorker>();
// builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.AutoNumberImportWorker>();
// builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.FileDetailImportWorker>();
// builder.Services.AddControllers(options =>
// {
//   options.Filters.Add<SessionValidationFilter>();
// })
//     .AddJsonOptions(options =>
//     {
//       // Use camelCase to match Angular/JavaScript conventions
//       options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
//       options.JsonSerializerOptions.WriteIndented = true; // Pretty print for debugging
//     });

// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen(c =>
// {
//   c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
//   {
//     Title = "House of Law API",
//     Version = "v1",
//     Description = "API for House of Law Management System"
//   });

//   // إضافة دعم JWT في Swagger
//   c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
//   {
//     Name = "Authorization",
//     Type = SecuritySchemeType.ApiKey,
//     Scheme = "Bearer",
//     BearerFormat = "JWT",
//     In = ParameterLocation.Header,
//     Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\""
//   });

//   c.AddSecurityRequirement(new OpenApiSecurityRequirement
//     {
//         {
//             new OpenApiSecurityScheme
//             {
//                 Reference = new OpenApiReference
//                 {
//                     Type = ReferenceType.SecurityScheme,
//                     Id = "Bearer"
//                 }
//             },
//             new string[] {}
//         }
//     });

//   // Handle file uploads properly - must be registered before other filters
//   c.OperationFilter<SwaggerFileUploadOperationFilter>();

//   // Ignore IFormFile in Swagger schema
//   c.SchemaFilter<SwaggerIgnoreSchemaFilter>();

//   // Include XML comments if available
//   var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
//   var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
//   if (File.Exists(xmlPath))
//   {
//     c.IncludeXmlComments(xmlPath);
//   }

//   // Ignore schema errors
//   c.IgnoreObsoleteActions();
//   c.IgnoreObsoleteProperties();
// });

// // Enable static files for file uploads/downloads

// var app = builder.Build();

// // Always enable Swagger in Development
// if (app.Environment.IsDevelopment())
// {
//   try
//   {
//     app.UseSwagger(c =>
//     {
//       c.RouteTemplate = "swagger/{documentName}/swagger.json";
//     });
//     app.UseSwaggerUI(c =>
//     {
//       c.SwaggerEndpoint("/swagger/v1/swagger.json", "House of Law API v1");
//       c.RoutePrefix = "swagger";
//       c.DisplayRequestDuration();
//     });
//   }
//   catch (Exception ex)
//   {
//     app.Logger.LogError(ex, "Error configuring Swagger");
//   }
// }

// app.UseRouting();

// // CORS must be immediately after UseRouting() and before other middleware
// app.UseCors("Frontend");

// // Handle OPTIONS requests for CORS preflight - must be before HTTPS redirection
// app.Use(async (context, next) =>
// {
//   // Handle CORS preflight (OPTIONS) requests immediately
//   if (context.Request.Method == "OPTIONS")
//   {
//     // CORS headers are already set by UseCors middleware
//     // Just return 204 No Content
//     context.Response.StatusCode = 204;
//     context.Response.ContentLength = 0;
//     await context.Response.CompleteAsync();
//     return;
//   }

//   // Allow browser refresh WebSocket connections without HTTPS redirect
//   if (context.Request.Path.StartsWithSegments("/HouseOfLawApi"))
//   {
//     if (context.WebSockets.IsWebSocketRequest)
//     {
//       var webSocket = await context.WebSockets.AcceptWebSocketAsync();
//       // Keep connection alive briefly for browser refresh
//       await Task.Delay(100);
//       await webSocket.CloseAsync(
//           System.Net.WebSockets.WebSocketCloseStatus.NormalClosure,
//           "Connection closed",
//           CancellationToken.None);
//       return;
//     }
//   }
//   await next();
// });

// // Skip HTTPS redirection for OPTIONS, WebSocket, SignalR, and browser refresh requests
// app.UseWhen(context =>
//     context.Request.Method != "OPTIONS" &&
//     !context.WebSockets.IsWebSocketRequest &&
//     !context.Request.Path.StartsWithSegments("/hubs") &&
//     !context.Request.Path.StartsWithSegments("/HouseOfLawApi"),
//     appBuilder =>
// {
//   // Only redirect to HTTPS if not in development or if explicitly configured
//   if (!app.Environment.IsDevelopment())
//   {
//     appBuilder.UseHttpsRedirection();
//   }
// });

// app.UseCloudflareForwarding();
// app.UseStaticFiles(); // Enable static files serving
// app.UseCors(x => x.AllowAnyHeader()
//     .AllowAnyMethod()
//     .AllowCredentials()
//     .WithOrigins("https://localhost:4200"));
// // Authentication & Authorization - Must be in this order
// app.UseAuthentication(); // Must come before UseAuthorization
// app.UseAuthorization(); // Must come after UseAuthentication

// // Error handling middleware - after routing but before endpoints
// app.UseExceptionHandler(errorApp =>
// {
//   errorApp.Run(async context =>
//   {
//     // Skip error handling for WebSocket and browser refresh connections
//     if (context.WebSockets.IsWebSocketRequest ||
//           context.Request.Path.StartsWithSegments("/HouseOfLawApi"))
//     {
//       return;
//     }

//     context.Response.StatusCode = 500;
//     context.Response.ContentType = "application/json";

//     var exceptionHandlerPathFeature = context.Features.Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerPathFeature>();
//     var exception = exceptionHandlerPathFeature?.Error;

//     var logger = context.RequestServices.GetRequiredService<ILogger<Program>>();
//     logger.LogError(exception, "Unhandled exception occurred");

//     var response = new { error = exception?.Message ?? "An error occurred" };
//     await context.Response.WriteAsJsonAsync(response);
//   });
// });

// app.MapControllers();
// app.MapHub<NotificationsHub>(NotificationsHub.Route);

// app.Run();

if (!Directory.Exists("wwwroot")) Directory.CreateDirectory("wwwroot");
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContextPool<ApplicationDbContext>(options =>
{
  var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
  options.UseSqlServer(connectionString, sqlOptions =>
  {
    sqlOptions.EnableRetryOnFailure(3, TimeSpan.FromSeconds(30), null);
  });
  options.EnableSensitiveDataLogging(builder.Environment.IsDevelopment());
}); 

builder.Services.AddMemoryCache();

builder.Services.Configure<CloudflareOptions>(builder.Configuration.GetSection("Cloudflare"));

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IPaymentRepository, PaymentRepository>();
builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
builder.Services.AddScoped<IMainfileRepository, MainfileRepository>();
builder.Services.AddScoped<IFileDetailRepository, FileDetailRepository>();
builder.Services.AddScoped<INoteRepository, NoteRepository>();
builder.Services.AddScoped<IMailRepository, MailRepository>();
builder.Services.AddScoped<IAttachmentRepository, AttachmentRepository>();
builder.Services.AddScoped<IAutoNumberRepository, AutoNumberRepository>();
builder.Services.AddScoped<IFileStatusRepository, FileStatusRepository>();
builder.Services.AddScoped<IFileClassificationRepository, FileClassificationRepository>();
builder.Services.AddScoped<ICallcenterStatementRepository, CallcenterStatementRepository>();
builder.Services.AddScoped<IAdditionalAmountRepository, AdditionalAmountRepository>();
builder.Services.AddScoped<IAuditsFileRepository, AuditsFileRepository>();

builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
builder.Services.AddScoped<IJwtService, JwtService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IClientService, ClientService>();
builder.Services.AddScoped<INotificationService, NotificationService>();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<IAuditService, AuditService>();

var corsOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? Array.Empty<string>();

builder.Services.AddCors(options =>
{
  options.AddPolicy("Frontend", policy =>
  {
    policy.AllowAnyHeader()
            .AllowAnyMethod()
            .SetPreflightMaxAge(TimeSpan.FromHours(24));

    if (corsOrigins.Length == 0)
    {
      policy.AllowAnyOrigin();
    }
    else
    {
      policy.WithOrigins(corsOrigins)
              .AllowCredentials();
    }
  });
});

var jwtSecretKey = builder.Configuration["Jwt:SecretKey"]
    ?? throw new InvalidOperationException("JWT SecretKey not configured");

builder.Services.AddAuthentication(options =>
{
  options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
  options.TokenValidationParameters = new TokenValidationParameters
  {
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecretKey)),
    ValidateIssuer = true,
    ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "HouseOfLawAPI",
    ValidateAudience = true,
    ValidAudience = builder.Configuration["Jwt:Audience"] ?? "HouseOfLawClient",
    ValidateLifetime = true,
    ClockSkew = TimeSpan.Zero
  };

  options.Events = new JwtBearerEvents
  {
    OnMessageReceived = context =>
    {
      var accessToken = context.Request.Query["access_token"];
      var path = context.HttpContext.Request.Path;
      if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/hubs/notifications"))
      {
        context.Token = accessToken;
      }
      return Task.CompletedTask;
    }
  };
});

builder.Services.AddAuthorization(options =>
{
  options.FallbackPolicy = null;
  options.AddPolicy("AdminOnly", policy => policy.RequireRole("admin"));
  options.AddPolicy("UserOnly", policy => policy.RequireAuthenticatedUser());
});

builder.Services.AddSignalR(options =>
{
  options.EnableDetailedErrors = builder.Environment.IsDevelopment();
  options.KeepAliveInterval = TimeSpan.FromSeconds(15);
  options.ClientTimeoutInterval = TimeSpan.FromSeconds(30);
  options.HandshakeTimeout = TimeSpan.FromSeconds(15);
});

builder.Services.AddSingleton<IUserIdProvider, CustomUserIdProvider>();
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IBreakService, BreakService>();
builder.Services.AddScoped<IPermissionService, PermissionService>();
builder.Services.AddScoped<ITaskService, TaskService>();

builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.MainfileImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.AutoNumberImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.FileDetailImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.PaymentImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.FileClassificationImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.NoteImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.AdditionalAmountImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.MailImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.AttachmentImportWorker>();
builder.Services.AddHostedService<House_of_law_api.Services.BackgroundWorkers.StartupJobCleanupService>();

builder.Services.AddControllers(options =>
{
  options.Filters.Add<SessionValidationFilter>();
})
.AddJsonOptions(options =>
{
  options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
  options.JsonSerializerOptions.WriteIndented = true;
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
  c.SwaggerDoc("v1", new OpenApiInfo
  {
    Title = "House of Law API",
    Version = "v1",
    Description = "API for House of Law Management System"
  });

  c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
  {
    Name = "Authorization",
    Type = SecuritySchemeType.ApiKey,
    Scheme = "Bearer",
    BearerFormat = "JWT",
    In = ParameterLocation.Header,
    Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\""
  });

  c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });

  c.OperationFilter<SwaggerFileUploadOperationFilter>();
  c.SchemaFilter<SwaggerIgnoreSchemaFilter>();

  var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
  var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
  if (File.Exists(xmlPath))
  {
    c.IncludeXmlComments(xmlPath);
  }

  c.IgnoreObsoleteActions();
  c.IgnoreObsoleteProperties();
});

var app = builder.Build();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
  ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

if (app.Environment.IsDevelopment())
{
  app.UseSwagger(c => { c.RouteTemplate = "swagger/{documentName}/swagger.json"; });
  app.UseSwaggerUI(c =>
  {
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "House of Law API v1");
    c.RoutePrefix = "swagger";
    c.DisplayRequestDuration();
  });
}


app.UseRouting();
app.Use(async (context, next) =>
{
  context.Response.OnStarting(() =>
  {
    if (context.Request.Headers.ContainsKey("Access-Control-Request-Private-Network"))
      context.Response.Headers["Access-Control-Allow-Private-Network"] = "true";
    return Task.CompletedTask;
  });

  await next();
});
app.UseCors("Frontend");

app.UseCloudflareForwarding();

app.UseAuthentication();
app.UseAuthorization();


//app.UseDefaultFiles();
//app.UseStaticFiles();
//app.MapControllerRoute("Default", "{contorller=Fallback}/{action=index}/{id?}");
//app.MapFallbackToController("index", "Fallback");

//var webRoot = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
//if (Directory.Exists(webRoot))
//{
//    app.UseDefaultFiles();
//    app.UseStaticFiles();
//    app.MapControllerRoute("Default", "{contorller=Fallback}/{action=index}/{id?}");
//    app.MapFallbackToController("index", "Fallback");
//}
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseExceptionHandler(errorApp =>
{
  errorApp.Run(async context =>
  {
    context.Response.StatusCode = 500;
    context.Response.ContentType = "application/json";
    var exceptionHandlerPathFeature = context.Features.Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerPathFeature>();
    var exception = exceptionHandlerPathFeature?.Error;
    var logger = context.RequestServices.GetRequiredService<ILogger<Program>>();
    logger.LogError(exception, "Unhandled exception occurred");
    var response = new { error = exception?.Message ?? "An error occurred" };
    await context.Response.WriteAsJsonAsync(response);
  });
});
app.MapHub<NotificationsHub>(NotificationsHub.Route);
app.MapControllers();


app.Run();
