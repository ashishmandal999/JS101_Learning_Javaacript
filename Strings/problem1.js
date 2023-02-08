
let str= "Given a string count the number of words in that string"

let countSpace=0;

for(let i=0;i<str.length;i++){
  if(str[i] == " "){
   countSpace++ 
  }
}
console.log(countSpace + 1);

