function getRandomInt(min = 1, max = 6) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function roll(){
let a = getRandomInt();
let b = getRandomInt();

let img1 = "images/dice"+a+".png";
let img2 = "images/dice"+b+".png";

console.log(img1+" "+img2);


let dice1 = document.getElementById("img1");

dice1.src = img1;

let dice2 = document.getElementById("img2");

dice2.src = img2;


if(a>b){
    document.getElementById("result").innerHTML = "Player 1 Wins";
}
else if(a==b){
    document.getElementById("result").innerHTML = "Draw";
}
else{
    document.getElementById("result").innerHTML = "Player 2 Wins";
}
}