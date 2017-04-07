
function sieve(num) {
  let arr = [];
  for(let i=0; i<num+1; i++){
    arr.push(i)
  }
  arr[0] = arr[1] = false;
  let i = 2;
  while (i * i <= num) {
    if (arr[i]){
      let multiple= i * i;
      while(multiple <=num){
        arr[multiple] = false;
        multiple += i;
      }
    }
     i++;
 }
 return arr.filter((i)=>{
   return i !== false;
   })
}

console.log(sieve(9));
console.log(sieve(17));
