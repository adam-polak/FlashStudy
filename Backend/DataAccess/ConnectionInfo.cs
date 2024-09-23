using Newtonsoft.Json;

namespace Backend.DataAccess;

public static class ConnectionInfo
{
    public static string GetConnectionInfo(string type)
    {
        try {
            using(JsonTextReader reader = new JsonTextReader(new StreamReader("hide.json")))
            {
                while(reader.Read())
                {
                    string? value = reader.Value != null ? reader.Value.ToString() : null;
                    if(value != null && reader.TokenType.ToString().Equals("PropertyName") && value.Equals(type))
                    {
                        reader.Read();
                        return reader.Value != null ? reader.Value.ToString() ?? "" : "";
                    }   
                }
            }
            return "";
        } catch(Exception) {
            return "";
        }
    }
}