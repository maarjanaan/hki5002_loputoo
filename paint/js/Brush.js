class Brush extends Tools {
	constructor(x, y, radius, color) {
		super();
		// this.x = x;
		// this.y = y;
		// this.radius = radius;
		// this.color = color;
		// this.context = undefined;
	}

	draw() {
		this.canvas.context.beginPath();
		this.canvas.context.fillStyle = this.color;
		this.canvas.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		this.canvas.context.fill();
	}

}