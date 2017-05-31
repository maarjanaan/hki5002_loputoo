class Tools {

	constructor() {
		this.isDrawing = false;
		document.querySelector('body').
			appendChild(Elements.createDiv('canvas_div'));
		this.canvas = new Canvas(800, 500 , 'canvas_div');
		document.querySelector('canvas')
			.addEventListener('mousedown', this.mouseDown.bind(this));
		document.querySelector('canvas')
			.addEventListener('mousemove', this.mouseMove.bind(this));
		document.querySelector('canvas')
			.addEventListener('mouseup', this.mouseUp.bind(this));
	}

	mouseDown(e) {
		let canvasPlace = document.querySelector('canvas').getBoundingClientRect();
		let mouseX = e.clientX - canvasPlace.left;
		let mouseY = e.clientY - canvasPlace.top;
		this.isDrawing = true;
		this.canvas.context.moveTo(mouseX, mouseY);
		}

	mouseMove(e) {
		if (this.isDrawing) {
			let canvasPlace = document.querySelector('canvas').getBoundingClientRect();
			let mouseX = e.clientX - canvasPlace.left;
			let mouseY = e.clientY - canvasPlace.top;
			this.canvas.context.beginPath();
 			this.canvas.context.fillStyle = this.color;
 			this.canvas.context.arc(mouseX, mouseY, this.radius, 0, 2*Math.PI);
 			this.canvas.context.fill();
		}
	}
	
	mouseUp(e) {
		this.isDrawing = false;
	}
}