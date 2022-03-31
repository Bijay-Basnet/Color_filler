// const button = document.querySelector('button');
// button.addEventListener('click',
//     function(event) {
//         // console.log(event);
//         // event.preventDefault();
//         console.log('click Me!!!');
//     });
const colorcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


const button = document.querySelector('button');
const color = document.querySelector('.span-color');
button.addEventListener('click', function() {

    let hexcode = '#';
    for (i = 0; i < 6; i++) {
        const randomNumber = getRandomNumber();
        hexcode += colorcode[randomNumber];
    }
    // console.log(randomNumber);
    document.body.style.backgroundColor = hexcode;
    color.innerText = hexcode;


});

function getRandomNumber() {
    return Math.floor(Math.random() *
        colorcode.length);
}