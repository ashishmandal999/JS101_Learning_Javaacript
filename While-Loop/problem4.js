let num=1;
let sumEven=0;
let count=0;

while (num<=100) {
  {
    if(num%2 == 0){
      sumEven= sumEven+num;
      count++;
    }
   
  }
   num++;
}

console.log(sumEven/count);