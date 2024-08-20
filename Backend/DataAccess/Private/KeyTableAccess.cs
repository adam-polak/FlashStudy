using Backend.DataAccess.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace Backend.DataAccess.Controllers;

public class KeyTableAccess
{

    private string connectionString;
    private string table;

    public KeyTableAccess()
    {
        connectionString = Environment.GetEnvironmentVariable("ConnectionString") ?? "";
        table = Environment.GetEnvironmentVariable("KeyTable") ?? "";
    }

    public long LoginToUser(long key)
    {
        return key;
    }

    private bool ContainsKey(long key)
    {
        return false;
    }

    public long GenerateKeyForUser(string username)
    {
        Random rnd = new Random();
        long key = -1;
        while(key == -1 || ContainsKey(key))
        {
            key = rnd.Next(1000, 1000000000);
        }

        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            string sqlStr = $"INSERT INTO {table} (username, key, enddate) VALUES ('{username}', {key}, '{DateTime.Now.ToShortDateString()}');";
            SqlCommand cmd = new SqlCommand(sqlStr, connection);
            connection.Close();
            return key;
        }
    }
}