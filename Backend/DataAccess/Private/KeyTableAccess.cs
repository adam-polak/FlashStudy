using Backend.DataAccess.Exceptions;
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
        if(!ContainsKey(key)) throw new Exception(DataAccessExceptions.INVALID_KEY);
        if(!IsKeyValid(key)) return GenerateNewKeyFromOld(key);
        else return key;
    }

    private bool IsKeyValid(long key)
    {
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            List<UserKeyModel> list = (List<UserKeyModel>)connection.Query<UserKeyModel>($"SELECT * FROM {table} WHERE loginkey={key};");
            connection.Close();
            UserKeyModel? userKey = list.FirstOrDefault();
            return userKey != null ? DateTime.Now.ToShortDateString().Equals(userKey.EndDate) : false;
        }
    }

    private bool ContainsKey(long key)
    {
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            List<UserKeyModel> list = (List<UserKeyModel>)connection.Query<UserKeyModel>($"SELECT * FROM {table} WHERE loginkey={key};");
            connection.Close();
            return list.Count() != 0;
        }
    }

    public string GetUsernameFromKey(long key)
    {
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            List<UserKeyModel> list = (List<UserKeyModel>)connection.Query<UserKeyModel>($"SELECT * FROM {table} WHERE loginkey={key};");
            connection.Close();
            UserKeyModel? userKey = list.FirstOrDefault();
            return userKey == null ? "" : userKey.Username;
        }
    }

    public long GenerateNewKeyFromOld(long key)
    {
        long nextKey = GenerateKey();
        string date = DateTime.Now.ToShortDateString();
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            string sqlStr = $"UPDATE {table} SET loginkey={nextKey}, enddate='{date}' WHERE loginkey={key};";
            SqlCommand cmd = new SqlCommand(sqlStr, connection);
            cmd.ExecuteNonQuery();
            connection.Close();
        }
        return nextKey;
    }

    private long GenerateKey()
    {
        Random rnd = new Random();
        long key = -1;
        while(key == -1 || ContainsKey(key))
        {
            key = rnd.Next(1000, 1000000000);
        }
        return key;
    }

    public long GenerateKeyForUser(string username)
    {
        ClearKeysForUser(username);
        long key = GenerateKey();
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            string date = DateTime.Now.ToShortDateString();
            string sqlStr = $"INSERT INTO {table} (username, loginkey, enddate) VALUES ('{username}', {key}, '{date}');";
            SqlCommand cmd = new SqlCommand(sqlStr, connection);
            cmd.ExecuteNonQuery();
            connection.Close();
            return key;
        }
    }

    private void ClearKeysForUser(string username)
    {
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            string sqlStr = $"DELETE FROM {table} WHERE username='{username}';";
            SqlCommand cmd = new SqlCommand(sqlStr, connection);
            cmd.ExecuteNonQuery();
            connection.Close();
        }
    }
}