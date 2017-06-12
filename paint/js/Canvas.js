class Canvas {
    constructor(width, height, id, location) {
        this.id = id;
        this.location = location;
        this.width = width;
        this.height = height;
        this.drawing = false;
        this.canvas = document.createElement('canvas');
        this.canvas.id = id;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.border = '1px solid black';
        this.context = this.canvas.getContext('2d');
        this.tool = new Pen('black', 10);  
        document.querySelector(`#${this.location}`)
            .appendChild(this.canvas);
        this.canvas.addEventListener('mousedown', this.mouseDown.bind(this));
        this.canvas.addEventListener('mouseup', this.mouseUp.bind(this));
        this.canvas.addEventListener('mouseout', this.mouseUp.bind(this));
        this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));
    }

    mouseDown(e) {
        this.drawing = true;
        this.currentX = e.clientX - this.canvas.getBoundingClientRect().left;
        this.currentY = e.clientY - this.canvas.getBoundingClientRect().top;
        this.previousX = this.currentX;
        this.previousY = this.currentY;
        this.tool.change(this.previousX, this.previousY, this.currentX, this.currentY, this.context);
    }

    mouseUp(e) {
        if (!this.drawing) {
            return;
        }
        this.drawing = false;
        this.previousX = null;
        this.previousY = null;
        this.currentX = null;
        this.currentY = null;
    }

    mouseMove(e) {
        if (!this.drawing) {
            this.currentX = null;
            this.currentY = null;
            return;
        }

        this.previousX = this.currentX;
        this.previousY = this.currentY;
        this.currentX = e.clientX - this.canvas.getBoundingClientRect().left;
        this.currentY = e.clientY - this.canvas.getBoundingClientRect().top;
        this.tool.change(this.previousX, this.previousY, this.currentX, this.currentY, this.context);
    }
}