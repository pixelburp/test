
var Circle = function() {
	this.test = "hi there";
	console.log(this.test);

	this.paddle = Crafty.e("Paddle, 2D, DOM, Color, Multiway")
			.color('rgb(255,0,0)')
			.attr({ x: 20, y: 100, w: 10, h: 100 })
			.multiway(4, { UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0 });

	// paddle: Crafty.e("Paddle, 2D, DOM, Color, Multiway")
	// 		.color('rgb(255,0,0)')
	// 		.attr({ x: 20, y: 100, w: 10, h: 100 })
	// 		.multiway(4, { W: -90, S: 90 })

};


