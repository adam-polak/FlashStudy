using Newtonsoft.Json;

namespace Backend.DataAccess;

public static class JsonInfo
{
    public static string GetJsonInfo(string type)
    {
        try {
            using(JsonTextReader reader = new JsonTextReader(new StreamReader("DataAccess/hide.json")))
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
        } catch(Exception e) {
            Console.WriteLine($"\nError: {e.Message}\n");
            return "";
        }
    }
}