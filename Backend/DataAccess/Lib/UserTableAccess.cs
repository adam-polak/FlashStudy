using Backend.DataAccess.Models;
using Backend.DataAccess.Exceptions;
using Dapper;
using Microsoft.Data.SqlClient;

namespace Backend.DataAccess.Controllers;

public class UserTableAccess
{

    private string connectionString;
    private string table;
    private KeyTableAccess keyTable;

    public UserTableAccess()
    {
        connectionString = Environment.GetEnvironmentVariable("ConnectionString") ?? JsonInfo.GetJsonInfo("ConnectionString");
        table = Environment.GetEnvironmentVariable("UserTable") ?? JsonInfo.GetJsonInfo("UserTable");
        keyTable = new KeyTableAccess();
    }

    public long CreateUser(string username, string password)
    {
        if(UserExists(username)) throw new Exception(DataAccessExceptions.USERNAME_EXISTS);
        using(SqlConnection connection = new SqlConnection(connectionString)) 
        {
            connection.Open();
            string sqlStr = $"INSERT INTO {table} (username, password) VALUES ('{username}', '{password}');";
            SqlCommand cmd = new SqlCommand(sqlStr, connection);
            cmd.ExecuteNonQuery();
            connection.Close();
        }
        return keyTable.GenerateKeyForUser(username);
    }

    private bool UserExists(string username)
    {
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            List<UserModel> list = (List<UserModel>)connection.Query<UserModel>($"SELECT * FROM {table} WHERE CONVERT(VARCHAR, username)='{username}';");
            connection.Close();
            return list.Count() != 0;
        }
    }

    private bool CorrectLogin(string username, string password)
    {
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            List<UserModel> list = (List<UserModel>)connection.Query<UserModel>($"SELECT * FROM {table} WHERE CONVERT(VARCHAR, username)='{username}' AND CONVERT(VARCHAR, password)='{password}';");
            connection.Close();
            return list.Count() != 0;
        }
    }

    public long LoginToUser(string username, string password)
    {
        if(!CorrectLogin(username, password)) throw new Exception(DataAccessExceptions.INCORRECT_LOGIN);
        return keyTable.GenerateKeyForUser(username);
    }
}