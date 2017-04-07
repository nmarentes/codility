function divisors(n){
  i=1;
  res = 0;
  while(i< Math.sqrt(n)){
    if(n%i===0){
      res +=2
    }
    i+=1
  }
i * i === n ? res += 1
console.log(res)
}



let fast_divisors  = (n){
  let divis = 0;
  let i = 1
  while(i*i<n){
    divis+=2
    i+=1
  }
  if(i*i===n){
    divis +=1
  }
return divis
}

fast_divisors(144)