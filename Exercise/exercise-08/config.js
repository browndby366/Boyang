/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select the parent of the items you want to click

// 3 -- Write an event handler to change the color of the page when each crcle is pressedi.

//ul.style.color = 'red'
// 2 -- Add an event listener to each circle
//ul.addEventListener('click',changeColor)
const happy = document.getElementById('switcher');

const fly = document.getElementsByTagName('body')[0];

const grey = document.getElementById('grayButton');
const white = document.getElementById('whiteButton');
const blue = document.getElementById('blueButton');
const yellow = document.getElementById('yellowButton');

console.log(happy)




function changeColorGrey(){
    fly.style.background = 'grey';
}

function changeColorWhite(){
    fly.style.background = 'white';
}

function changeColorBlue(){
    fly.style.background = 'blue';
}

function changeColorYellow(){
    fly.style.background = 'yellow';
}


grey.addEventListener('click',changeColorGrey)
white.addEventListener('click',changeColorWhite)
blue.addEventListener('click',changeColorBlue)
yellow.addEventListener('click',changeColorYellow)