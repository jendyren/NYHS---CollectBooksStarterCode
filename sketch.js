var ghost, monster, sun, grass, rain, book, score, time, bookX, bookY;

function setup() {
  createCanvas(600, 600);
	//CREATES THE BOOK SPRITE
  book = createSprite(200, 200);
  book.addImage(loadImage('assets/book.png'));
  book.scale = 0.10;

	//CREATES BACKGROUND GRASS SPRITE
	grass = createSprite(0, 650);
	grass.addImage(loadImage('assets/grass.png'))
	grass.scale = 1.5

	//CREATES THE RAINDROP SPRITE/
	rain = createSprite(100, 60);
	rain.addImage(loadImage('assets/drop1.png'))
	rain.scale = 0.5;

	//GIVES BOOK SPRITE POSITION A RANDOM POSITION
	bookX = random(width) - 30
	bookY = random(height) - 30

	//SETS SCORE TO ZERO
	score = 0;
	//SETS TIME
  time = 500;

	gameIsOver = false;
  
}

function draw() {
	//SETS BACKGROUND COLOR
  background(200, 200, 255);

	//SHOWS SCORE AND TIME LEFT
	text(`Books collected: ${score}`, 20, 20);
  text(`Time remaining: ${time}`, 20, 40);

	//SETS RAINDROP SPRITE TO YOUR MOUSE POSITION
  rain.position.x = mouseX;
  rain.position.y = mouseY;

	//HANDLES THE TIME LEFT
	handleTime();

	//WHEN BOOK COLLIDES WITH RAINDROP, CALL handleCollision FUNCTION
	book.collide(rain, handleCollision)
	drawSprites();

}

//COLLECTS BOOKS AND INCREASES SCORE WHEN GAME IS NOT OVER
function handleCollision(spriteA, spriteB) {
	spriteA.remove();
  if (!gameIsOver) {
    bookY = random(height);
    bookX = random(width);
    score += 1;
		generateBooks();
  }
}

//GENERATES NEW BOOK TO A RANDOM POSITION AFTER COLLISION
function generateBooks(next){
	if(!gameIsOver){
		book = createSprite(200, 200);
		book.addImage(loadImage('assets/book.png'));
		book.scale = 0.10;
		drawSprites()
		book.position.x = bookX;
  	book.position.y = bookY;
	}
}

//HANDLES TIME - WHEN TIME REACHES 0 - THE GAME IS OVER
function handleTime() {
  if (time > 0) {
    time -= 1;
  } else {
    gameIsOver = true;
    text(`TIME'S UP!`, 20, 60);
  }
}