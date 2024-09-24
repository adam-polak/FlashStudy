using Backend.Controllers.Models;
using Backend.Controllers.Lib;
using Backend.DataAccess.Controllers;
using Backend.DataAccess.Exceptions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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

    [HttpPost("createuser/{username}/{password}")]
    public IActionResult CreateUser(string username, string password)
    {
        Headers.AddCors(this);
        try {
            long key = userTable.CreateUser(username, password);
            User user = new User() { Username = username, Key = key };
            string json = JsonConvert.SerializeObject(user);
            return Ok(json);
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
            User user = new User() { Username = username, Key = key };
            string json = JsonConvert.SerializeObject(user);
            return Ok(json);
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
            User user = new User() { Username = keyTable.GetUsernameFromKey(key), Key = key };
            string json = JsonConvert.SerializeObject(user);
            return Ok(json);
        } catch(Exception e) {
            return BadRequest(DataAccessExceptions.HandleException(e.Message));
        }
    }

}