using Backend.DataAccess.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("/user")]
public class UserController : ControllerBase
{

    UserTableAccess userTable;
    KeyTableAccess keyTable;

    public UserController()
    {
        userTable = new UserTableAccess();
        keyTable = new KeyTableAccess();
    }

    [HttpPost("createuser/{username}/{password}")]
    public IActionResult CreateUser(string username, string password)
    {
        try {
            return Ok();
        } catch(Exception e) {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("/login/{username}/{password}")]
    public IActionResult LoginToUser(string username, string password)
    {
        try {
            return Ok();
        } catch(Exception e) {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("/loginkey/{key}")]
    public IActionResult LoginToUser(int key)
    {
        try {
            return Ok();
        } catch(Exception e) {
            return BadRequest(e.Message);
        }
    }

}