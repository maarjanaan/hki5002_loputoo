window.onload = () => {
	new App();
	tool = new Tools();

	size.onchange = function(){
		tool.radius = size.value * 5;
	}

	red.onclick = function(){
		tool.color = "red";
	}

	blue.onclick = function(){
		tool.color = "blue";
	}

	green.onclick = function(){
		tool.color = "green";
	}

	yellow.onclick = function(){
		tool.color = "yellow";
	}

	pink.onclick = function(){
		tool.color = "pink";
	}

	eraser.onclick = function(){
		tool.color = "white";
	}
}

class App {
	constructor() {
		document.querySelector('body').
			appendChild(Elements.createHeading('h1', 'Joonistamine'));
		document.querySelector('body').
			appendChild(Elements.createParagraph('p', 'Vali värv ja suurus. Joonista midagi ilusat!'));
		document.querySelector('body').
			appendChild(Elements.createButton('red', 'Punane'));
		document.querySelector('body').
			appendChild(Elements.createButton('blue', 'Sinine'));
		document.querySelector('body').
			appendChild(Elements.createButton('green', 'Roheline'));
		document.querySelector('body').
			appendChild(Elements.createButton('yellow', 'Kollane'));
		document.querySelector('body').
			appendChild(Elements.createButton('pink', 'Roosa'));
		// document.querySelector('body').
		// 	appendChild(Elements.createButton('brush', 'Pintsel'));
		// document.querySelector('body').
		// 	appendChild(Elements.createButton('pen', 'Pliiats'));
		document.querySelector('body').
			appendChild(Elements.createButton('eraser', 'Kustukumm'));
		document.querySelector('body').
			appendChild(Elements.createSlider('size', 1, 20, 3));
	}
}