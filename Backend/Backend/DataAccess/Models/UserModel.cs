using Backend.DataAccess.Lib;

namespace Backend.DataAccess.Models;

public class UserModel : ISqlModel
{
    public required string Username { get; set; }
    public required string Password { get; set; }

    public UserModel(string username, string password)
    {
        Username = username;
        Password = password;
    }

    public List<ISqlValue> GetSqlValues()
    {
        SqlValueFactory factory = new SqlValueFactory();
        List<ISqlValue> list =
        [
            factory.CreateSqlValue("Username", Username),
            factory.CreateSqlValue("Password", Password)
        ];
        return list;
    }
}