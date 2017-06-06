class Pen extends Tools {
	constructor(x, y, width, heigth, color) {
		super();
		this.width = tool.radius * 2;
		this.heigth = tool.radius * 2;
	}

	draw() {
		this.canvas.context.fillStyle = this.color;
		this.canvas.context.fillRect(this.x, this.y, this.width, this.height);
	}
}