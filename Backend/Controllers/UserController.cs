using Backend.Controllers.Lib;
using Backend.DataAccess.Controllers;
using Backend.DataAccess.Exceptions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[EnableCors("corspolicy")]
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

    [HttpGet("userexists/{username}")]
    public IActionResult UserExists(string username)
    {
        return Ok();
    }

    [HttpPost("createuser/{username}/{password}")]
    public IActionResult CreateUser(string username, string password)
    {
        Headers.AddCors(this);
        try {
            long key = userTable.CreateUser(username, password);
            return Ok(key);
        } catch(Exception e) {
            return BadRequest(DataAccessExceptions.HandleException(e.Message));
        }
    }

    [HttpGet("/login/{username}/{password}")]
    public IActionResult LoginToUser(string username, string password)
    {
        Headers.AddCors(this);
        try {
            long key = userTable.LoginToUser(username, password);
            return Ok(key);
        } catch(Exception e) {
            return BadRequest(DataAccessExceptions.HandleException(e.Message));
        }
    }

    [HttpGet("/loginkey/{loginKey}")]
    public IActionResult LoginToUser(long loginKey)
    {
        Headers.AddCors(this);
        try {
            long key = keyTable.LoginToUser(loginKey);
            return Ok(key);
        } catch(Exception e) {
            return BadRequest(DataAccessExceptions.HandleException(e.Message));
        }
    }

}