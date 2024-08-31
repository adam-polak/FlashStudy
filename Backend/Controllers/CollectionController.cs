using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace Backend.Controllers;

[EnableCors("corspolicy")]
[ApiController]
[Route("/collection")]
public class CollectionController : ControllerBase
{

}