using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using EirViewer.API.Data;
using EirViewer.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace EirViewer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GateController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _config;

        public GateController(DataContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        // [HttpGet("{eirunitid}")]
        [HttpGet("getbyeir")]
        public async Task<IActionResult> GetByEir([FromQuery] UserParams userParams)
        {
            var gate = _context.InGates.AsQueryable();

            if (String.IsNullOrEmpty(userParams.Eir))
                return BadRequest("Provide Parameter String");

            gate = gate.Where(g => g.IgEir.Equals(userParams.Eir));

            gate = gate.Include(g => g.Customer);
            gate = gate.Include(g => g.Depot);
            gate = gate.Include(g => g.EquipmentType);

            var response = await gate.ToListAsync();

            if (response.Count == 0)
            {
                return BadRequest("EIR " + userParams.Eir + " could not be found" );
            }
            //if (response.Count > 0)
            else
            {
                var pictureInfo = new GatePictures();

                pictureInfo.InDate = response[0].IgDate.ToString("MM/dd/yyyy HH:mm tt");

                var photoUrl = _config.GetSection("AppSettings:GateBaseUrl").Value + userParams.Eir + "/";

                var photoPath = _config.GetSection("AppSettings:GateBasePath").Value + userParams.Eir;

                var photoFiles = Directory.GetFiles(photoPath);

                var photoUrlList = new List<string>();

                foreach (String filename in photoFiles)
                    photoUrlList.Add(photoUrl + System.IO.Path.GetFileName(filename));

                 pictureInfo.PictureUrl = photoUrlList.ToArray();

                return Ok(new
                {
                    pictureInfo,
                    response
                });                 
            }
   
            return Ok(response);
        }

        [HttpGet("getbyunitid")]
        public async Task<IActionResult> GetByUnitId([FromQuery] UserParams userParams)
        {
            var gate = _context.InGates.AsQueryable();

            if (String.IsNullOrEmpty(userParams.UnitId))
                return BadRequest("Provide Parameter String");

            gate = gate.Where(g => g.IgUnitId.Equals(userParams.UnitId));

            gate = gate.Include(g => g.Customer);
            gate = gate.Include(g => g.Depot);
            gate = gate.Include(g => g.EquipmentType);
            
            gate = gate.OrderByDescending(g => g.IgCreateDate);

            var response = await gate.ToListAsync();

            if (response.Count == 0)
                return BadRequest("Unit " + userParams.UnitId + " could not be found" );

            return Ok(response);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        
    }
}