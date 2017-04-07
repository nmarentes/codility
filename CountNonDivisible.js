let testArr = [3, 1, 2, 3, 6] 
        // -> [2, 4, 3, 2, 0]

function slow_solution(arr){
  let resultsArr = []
  for(let i=0; i<arr.length;i++){
    resultsArr[i] = 0;
    for(let j=0; j<arr.length; j++){
      if(arr[i] % arr[j] !== 0){
        resultsArr[i] +=1;
        // console.log('|i:', i, '| j:', j,'| arr:', arr[i], '| res:',resultsArr[i])
      }
    }
  }
  return resultsArr
}

let a = slow_solution(testArr)
console.log(a)
console.log('hi')
