let lowerCase =[ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let changeCase= "s";

for(let i=0;i<=lowerCase.length;i++){
  if(lowerCase[i] == changeCase){
    changeCase= upperCase[i];
  }
}
console.log(changeCase);