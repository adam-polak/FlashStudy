export type User = {
    Username: string;
    Key: number;
}

export class ApiResponses {
    public static TryAgain = "Try again.";
    public static IncorrectLogin = "Incorrect login.";
    public static UsernameExists = "Username already exists.";
    public static InvalidKey = "Invalid key.";
}

// export const FlashStudyApi : string = "https://flashstudy-api.azurewebsites.net/";
export const FlashStudyApi : string = "http://localhost:5039/";