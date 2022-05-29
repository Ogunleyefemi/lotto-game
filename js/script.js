// let age = parseInt(prompt("input ur age"));

// if (age === 0){
//     alert("pls enter a valid age");
// }
// //age 1-17
// else if(age <=17){
//     alert("you're still a teenager");
// }
// //age 18-40
// else if(age >=18 && age <=40){
//     alert("Life is too short");
// }
// //age 40-60
// else if(age > 40 && age <=60){
//     alert(" are u a fool? lol...");
// }
// else{
//     alert("start parking abeg");
// }
//A guessing game to win jackpot
const num = 30;
let lotto = parseInt(prompt("lotto number"));
if (lotto == num){
    alert("congratulations you've won!");
}
else if (lotto < num){
    alert("oooooppppps! try again: number is greater than" +  " "  + lotto);
}
else if (lotto > num){
    alert("oooooppps! try again: number is lesser than" +  " "  + lotto);
}
else if (lotto % 2 === 0){
    alert("ooooppppps, it should be odd");
}
else if (lotto % 2 === 1){
    alert("ooooppps, it should be even");
}
else{

    alert("olodo ofo");
}
