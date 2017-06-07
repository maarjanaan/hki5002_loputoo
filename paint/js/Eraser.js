class Eraser {
    constructor(radius) {
        this.x0;
		this.y0;
		this.x1;
		this.y1;
		this.radius = radius;
		this.color = 'white';
		this.context = undefined;
    }

    change(previousX, previousY, currentX, currentY, context) {
        this.x0 = previousX;
		this.y0 = previousY;
		this.x1 = currentX;
		this.y1 = currentY;
		this.draw(context);
    }

	draw(context) {
        this.context = context;
		this.context.beginPath();
		this.context.moveTo(this.x0, this.y0);
		this.context.lineTo(this.x1, this.y1);
		this.context.lineCap = 'round';
		this.context.lineJoin = 'round';
		this.context.shadowBlur = 0;
  		this.context.shadowColor = 0;
		this.context.strokeStyle = this.color;
		this.context.lineWidth = this.radius;
		this.context.stroke();
		this.context.closePath();
	}
}