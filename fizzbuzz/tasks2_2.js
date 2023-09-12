const number =parseInt(prompt("Please enter the number"))
{function isPrime(n)
{
      if(n == 1 || n == 0) return false;
    
      for(var i = 2; i < n; i++)
      {
        if(n % i == 0) return false;
      }
      return true;
}
}
 
var N = number;
  for(var i = 1; i <= N; i++)
{
    if(isPrime(i)) 
   {
   alert(i);
    }
}
