const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

function setup(){
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

	fill(255);
	textSize(128);
	textFont("Arial");
	textAlign(CENTER, CENTER);
}

function draw(){
	background("#3078c5");

	const mousePos = createVector(mouseX, mouseY);
	text("p5.ts", mousePos.x, mousePos.y);
}

window.draw = draw;
window.setup = setup;