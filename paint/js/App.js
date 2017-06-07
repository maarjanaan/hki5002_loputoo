window.onload = () => {
    const app = new App();

    document.querySelector('#purple')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'purple';
    });

    document.querySelector('#pink')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'pink';
    });

    document.querySelector('#red')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'red';
    });

    document.querySelector('#orange')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'orange';
    });

    document.querySelector('#yellow')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'yellow';
    });

    document.querySelector('#green')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'green';
    });

    document.querySelector('#teal')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'teal';
    });

    document.querySelector('#blue')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'blue';
    });

    document.querySelector('#lightblue')
        .addEventListener('click', () => {
            app.canvas.tool.color = 'lightblue';
    });

    document.querySelector('#pen')
        .addEventListener('click', () => {
            app.canvas.tool = new Pen(app.canvas.tool.color, app.canvas.tool.radius);
    });

    document.querySelector('#brush')
        .addEventListener('click', () => {
            app.canvas.tool = new Brush(app.canvas.tool.color, app.canvas.tool.radius);
    });

    document.querySelector('#eraser')
        .addEventListener('click', () => {
            app.canvas.tool = new Eraser(app.canvas.tool.radius);
    });

    document.querySelector('#range')
        .addEventListener('change', () => {
            let value = document.querySelector('#range').value;
            app.canvas.tool.radius = parseInt(value);
        });

};

class App {
    constructor() {
        this.canvas = new Canvas(500, 500, 'board', 'canvas_div');
    }
}