class Tools {

	constructor() {
		this.isDrawing = false;
		document.querySelector('body').
			appendChild(Elements.createDiv('canvas_div'));
		this.canvas = new Canvas(800, 500, 'canvas_div');

		// SALVESTAMINE: see variant ei tööta
		// document.querySelector('body').
		// 	appendChild(Elements.createButton('save', 'Lae pilt alla'));
		// document.querySelector('#save')
		// 	.addEventListener('click', this.download.bind(this), false);

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
			this.x = e.clientX - canvasPlace.left;
			this.y = e.clientY - canvasPlace.top;
			this.draw();

// KUI ON VAJUTATUD BRUSH'i, brush.draw()
// KUI ON VAJUTATUD PEN'i, pen.draw()
// KUI ON VAJUTATUD ERASER'it, eraser.draw()

		}
	}
	
	mouseUp(e) {
		this.isDrawing = false;
	}

//joonistab jooni, aga värvi muudab kõikidel joontel, mitte ühel	
	draw() {
		this.canvas.context.lineTo(this.x, this.y);
		this.canvas.context.lineJoin = "round";
		this.canvas.context.lineCap = "round";
		this.canvas.context.lineWidth = this.radius;
		this.canvas.context.strokeStyle = this.color;
		this.canvas.context.stroke();
	}

//tulistab ringe, ei seo ära
	draw_vol2() {
		this.canvas.context.beginPath();
		this.canvas.context.fillStyle = this.color;
		this.canvas.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		this.canvas.context.fill();
	}

	// download() {
	//     let temp = this.canvas.toDataURL();
	//     this.href = temp;
	// }

}