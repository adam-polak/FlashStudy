using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers.Lib;

public static class Headers
{
    public static void AddCors(ControllerBase controller)
    {
        controller.Response.Headers.TryAdd("Access-Control-Allow-Origin", Environment.GetEnvironmentVariable("Domain") ?? "");
    }
}