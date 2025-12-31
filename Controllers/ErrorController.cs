using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace House_of_law_api.Controllers;

[ApiController]
[Route("error")]
public class ErrorController : ControllerBase
{
    [HttpGet]
    [HttpPost]
    [HttpPut]
    [HttpDelete]
    public IActionResult Error()
    {
        var context = HttpContext.Features.Get<IExceptionHandlerFeature>();
        var exception = context?.Error;

        return Problem(
            detail: exception?.ToString(),
            title: exception?.Message ?? "An error occurred"
        );
    }
}
