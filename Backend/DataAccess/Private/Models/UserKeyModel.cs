namespace Backend.DataAccess.Models;

public class UserKeyModel
{
    public required string Username { get; set; }
    public long Key { get; set; }
    public required string EndDate { get; set; }
}