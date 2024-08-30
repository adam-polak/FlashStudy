using Microsoft.AspNetCore.Mvc;

namespace Backend.DataAccess.Exceptions;

public static class DataAccessExceptions
{
    public static readonly string USERNAME_EXISTS = "Username already exists.";
    public static readonly string INCORRECT_LOGIN = "Incorrect login.";
    public static readonly string INVALID_KEY = "Invalid key.";
    public static readonly string TRY_AGAIN = "Try again.";

    private static bool IsDataAccessException(string e)
    {
        if(
            USERNAME_EXISTS.Equals(e) ||
            INCORRECT_LOGIN.Equals(e) ||
            INVALID_KEY.Equals(e)
        ) return true;
        else return false;
    }

    public static string HandleException(string e)
    {
        if(IsDataAccessException(e)) return e;
        else {
            Console.WriteLine(e);
            return TRY_AGAIN;
        }
    }
}