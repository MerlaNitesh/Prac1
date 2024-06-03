export function add(a,b)
{
    return a+b;
}
export function sub(c,d)
{
    return c-d;
}
export function mul(a,b)
{
    return a*b;
}
export function div(a,b)
{
    if(b==0)
    {
        throw new error("B can't be zero")
    }
    return a/b
}