let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let length = 15;
let speed = 4;
let left = 0;
let right = 0;

const leftPaddle = {
    x: length * 2,
    y: canvas.height / 2 - length * 5,
    width: length,
    height: length * 7,
    dy: 0
};

const rightPaddle = {
    x: canvas.width - length * 3,
    y: canvas.height / 2 - length * 5,
    width: length,
    height: length * 7,
    dy: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: length,
    dx: speed,
    dy: speed,
};


function object() {
    ctx.beginPath()
    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
    ctx.fillStyle = '#FF8C00'
    ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
    ctx.closePath()
    ctx.beginPath();
    ctx.fillStyle = 'white'
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fill()
    ctx.closePath();
}

// function text() {
//     ctx.font = "30px Verdana";
//     color = ctx.createLinearGradient(0, 0, canvas.width, 0);
//     color.addColorStop("0.2", "magenta");
//     color.addColorStop("0.5", "blue");
//     color.addColorStop("0.8", "red");
//     ctx.fillStyle = color;
//     ctx.fillText("Start", 110, 90);
// }



