using House_of_law_api.Data;
using House_of_law_api.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House_of_law_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LookupsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LookupsController(ApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get all lookup values for a specific type (e.g., COOPERATION, CONTACT, CIVIL, INTERNAL)
        /// </summary>
        [HttpGet("{type}")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<LookupValueDto>>> GetByType(string type)
        {
            var values = await _context.LookupValues
                .Where(v => v.Type == type.ToUpper() && v.IsActive)
                .Select(v => new LookupValueDto
                {
                    Id = v.Id,
                    Type = v.Type,
                    Code = v.Code,
                    Name = v.Name,
                    Description = v.Description
                })
                .ToListAsync();

            return Ok(values);
        }

        /// <summary>
        /// Get all unique types of lookups
        /// </summary>
        [HttpGet("types")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<string>>> GetTypes()
        {
            var types = await _context.LookupValues
                .Select(v => v.Type)
                .Distinct()
                .ToListAsync();

            return Ok(types);
        }
    }
}
