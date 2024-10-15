namespace Backend.DataAccess.Lib;

public abstract class AbstractSqlValue : ISqlValue
{
    public string _name;

    public AbstractSqlValue(string name)
    {
        _name = name;
    }

    public string GetLabelString()
    {
        return _name;
    }

    public virtual string GetSqlEqualsString()
    {
        return $"{GetLabelString()}={GetValueSqlString()}";
    }

    public abstract string GetValueSqlString();
}

public class StringSqlValue : AbstractSqlValue
{
    private string _value;

    public StringSqlValue(string name, string value) : base(name)
    {
        _value = value;
    }

    public override string GetValueSqlString()
    {
        return $"'{_value}'";
    }
}

public class IntSqlValue : AbstractSqlValue
{
    private int _value;

    public IntSqlValue(string name, int value) : base(name)
    {
        _value = value;
    }

    public override string GetValueSqlString()
    {
        return $"{_value}";
    }
}

public class LongSqlValue : AbstractSqlValue
{
    private long _value;

    public LongSqlValue(string name, long value) : base(name)
    {
        _value = value;
    }

    public override string GetValueSqlString()
    {
        return $"{_value}";
    }
}

public class SqlValueFactory
{
    public ISqlValue CreateSqlValue(string name, string value)
    {
        return new StringSqlValue(name, value);
    }

    public ISqlValue CreateSqlValue(string name, int value)
    {
        return new IntSqlValue(name, value);
    }

    public ISqlValue CreateSqlValue(string name, long value)
    {
        return new LongSqlValue(name, value);
    }
}