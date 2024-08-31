export type User = {
    username: string;
    loginkey: number;
}

export class ApiResponses {
    public static TryAgain = "Try again.";
    public static IncorrectLogin = "Incorrect login.";
    public static UsernameExists = "Username already exists.";
    public static InvalidKey = "Invalid key.";
}