let givenNumbers= [1,2,3,4,5,6,7,8,9,10,22,23,45,48,52]

let sum=0;
let count=0;

for(i=0;i<givenNumbers.length;i++){
  if(givenNumbers[i]%2 == 0){
    sum = sum + givenNumbers[i];
    count++;
  }
}
console.log(sum/count);

