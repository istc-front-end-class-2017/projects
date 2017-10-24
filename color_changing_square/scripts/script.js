const square = document.createElement('div');
square.setAttribute('class', 'square');
document.body.appendChild(square);

//document.getElemetsByTagName('body')[0].appendChild(suqare);

setInterval(()=>{
    square.setAttribute('style', randomRGB());
}, 1000);

function randomColor(){
    return Math.floor(Math.random()*256);
}

function randomRGB(){
    const red = randomColor();
    const green = randomColor();
    const blue = randomColor();
    const rgb = `background-color: rgb(${red}, ${green}, ${blue});`;
    // const rgb = "rgb("+red+", "+green+", "+blue+")";
    return rgb;
}