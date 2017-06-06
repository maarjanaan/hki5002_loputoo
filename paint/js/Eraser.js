class Eraser extends Tools {
	constructor(x, y, width, height) {
		super();
		this.width = tool.radius * 2;
		this.heigth = tool.radius * 2;
	}

	draw() {
		this.canvas.context.clearRect(this.x, this.y, this.width, this.height);
	}
}