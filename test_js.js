var x = 200
var y = 200
var vx = 0
var vy = 0

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        vx -= 0.1
    }
    else if(event.keyCode == 39) {
        vx += 0.1
    }
});

var canvas = document.getElementById("testing");
var ctx = canvas.getContext("2d");

function display() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.rect(x, 40, 50, 50);
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
}

function updatePos() {
	x += vx
	if (x < 0) {
		x = 0
		vx = -vx
	} else if (x > canvas.width - 50) {
		x = canvas.width - 50
		vx = -vx	
	}
}

function updateAll() {
	updatePos()
	display()
}

setInterval(updateAll, 10)
