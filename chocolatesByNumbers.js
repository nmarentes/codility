function gcd(a, b){
  if(a===b){
    return a;
  }
  if(a > b){
   return gcd(a-b, b)
  }else if(a<b){
    return gcd(a, b-a)
  }
}

console.log(gcd(20,12))
console.log(12 % 20)

function gcd1(a,b){
 if(a % b === 0){
   return b 
  } else{
    return gcd1(b, a%b);
  } 
}

console.log(gcd1(12,20))