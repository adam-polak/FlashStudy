using Backend.DataAccess.Controllers;

namespace Backend.Tests;

public class KeyTableAccessTests
{

    KeyTableAccess _keyTableAccess;

    public KeyTableAccessTests()
    {
        _keyTableAccess = new KeyTableAccess();
    }

    [Fact]
    public void KeyTableAccess_GenerateKeyForUser()
    {
        Assert.Fail("Not implemented");
    }
}