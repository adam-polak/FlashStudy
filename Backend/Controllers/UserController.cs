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
            long key = userTable.CreateUser(username, password);
            return Ok(key);
        } catch(Exception e) {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("/login/{username}/{password}")]
    public IActionResult LoginToUser(string username, string password)
    {
        try {
            long key = userTable.LoginToUser(username, password);
            return Ok(key);
        } catch(Exception e) {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("/loginkey/{loginKey}")]
    public IActionResult LoginToUser(long loginKey)
    {
        try {
            long key = keyTable.LoginToUser(loginKey);
            return Ok(key);
        } catch(Exception e) {
            return BadRequest(e.Message);
        }
    }

}