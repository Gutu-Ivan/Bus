class Bus{
	constructor () {
		this.distance = 100;
		this.X = 0;
		this.Y = 0;
		this.elemBus = document.querySelector('#bus');
	}

	startEngine(){
		console.log('The engine is running!');
	}

	moveUp() {
		console.log(`X = ${this.X} Y = ${this.Y}`);
		this.elemBus.style.top=`${this.Y}px`
		if (this.checkPosUp())
			this.Y = 800
		else
			this.Y -= this.distance;
	}

	moveDown() {
		console.log(`X = ${this.X} Y = ${this.Y}`);
		this.elemBus.style.top =`${this.Y}px`
		if (this.checkPosDown())
			this.Y = 0
		else
			this.Y += this.distance;
	}

	moveLeft() {
		console.log(`X = ${this.X} Y = ${this.Y}`);
		this.elemBus.style.left =`${this.X}px`
		if (this.checkPosLeft())
			this.X = 1700;
		else
			this.X -= this.distance;;
	}

	moveRight() {
		console.log(`X = ${this.X} Y = ${this.Y}`);
		this.elemBus.style.left = `${this.X}px`
		if (this.checkPosRight())
			this.X = 0
		else
			this.X += this.distance;	
	}

	stopEngine() {
		console.log('engine doesnt work!');
	}

	checkPosRight() {
		if (this.X > 1600)
			return true;
	}
	checkPosLeft() {
		if (this.X <100)
			return true;
	}
	checkPosUp() {
		if (100 > this.Y)
			return true;
	}
	checkPosDown() {
		if (this.Y > 700)
			return true;
	}

}
const newBus = new Bus();
document.addEventListener("keydown", event => {

	switch(event.keyCode){
 		case 38:
 			newBus.moveUp();
 			break;
 		case 40:
 			newBus.moveDown()
 			break;
 		case 37:
 			newBus.moveLeft();
 			break;
 		case 39:
 			newBus.moveRight();
 			break;
	}	
});