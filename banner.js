let sketch = function(p) {
	p.setup = function(){
/* 	var element = document.getElementByClass('homepic');
	var positionInfo = element.getBoundingClientRect();
	var wheight = positionInfo.height;
	var wwidth = positionInfo.width; */
	p.createCanvas(300, 300);
	p.background(255);
	}

	p.draw = function() {
		var x = 300;
		var y = 300;
		p.stroke(0);
		p.line(0, 0, x, y);
	}
};
let node = document.createElement('div');
window.document.getElementsByClassName('homepic')[0].appendChild(node);
new p5(sketch, node);