const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
function setup(){
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

	fill(255);
	textSize(128);
	textFont("Arial");
	textAlign(CENTER, CENTER);
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
function draw(){
	background("#3078c5");

	const mousePos = createVector(mouseX, mouseY);
	text("p5.ts", mousePos.x, mousePos.y);
}