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
const happy1 = document.getElementById('whiteButton');

console.log(happy)

happy.style.background='blue';
happy.style.height='50vh';


function changeColor(){
    happy.style.background = 'red';
}



happy1.addEventListener('click',changeColor)

