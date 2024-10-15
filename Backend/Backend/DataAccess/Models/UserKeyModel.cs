using Backend.DataAccess.Lib;

namespace Backend.DataAccess.Models;

public class UserKeyModel : ISqlModel
{
    public required string Username { get; set; }
    public long LoginKey { get; set; }
    public required string EndDate { get; set; }

    public UserKeyModel(string username, long loginKey, string endDate)
    {
        Username = username;
        LoginKey = loginKey;
        EndDate = endDate;
    }

    public List<ISqlValue> GetValues()
    {
        SqlValueFactory factory = new SqlValueFactory();
        List<ISqlValue> list =
        [
            factory.CreateSqlValue("Username", Username),
            factory.CreateSqlValue("LoginKey", LoginKey),
            factory.CreateSqlValue("EndDate", EndDate)
        ];
        return list;
    }
}