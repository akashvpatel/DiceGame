//random generator for player 1


let randomNumberGen1 = Math.floor((Math.random() * 6) + 1);

let randomNumberGenLeft = "dice" + randomNumberGen1 + ".png";


let imageLeft = document.querySelectorAll("img")[0];

imageLeft.setAttribute("src", randomNumberGenLeft);



//random generator for player 2


let randomNumberGen2 = Math.floor((Math.random() * 6) + 1);

let randomNumberGenRight = "dice" + randomNumberGen2 + ".png";

let imageRight = document.querySelectorAll("img")[1];

imageRight.setAttribute("src", randomNumberGenRight);



//conditions



if (randomNumberGen1 > randomNumberGen2) {

    document.querySelector("h2").innerHTML = "Player 1 win";
}

else if (randomNumberGen1 < randomNumberGen2) {
    document.querySelector("h2").innerHTML = "Player 2 win ";
} else {
    document.querySelector("h2").innerHTML = "Draw!!";
}