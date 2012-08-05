var Player = function() {

	Crafty.c('Player', {
    init: function() {
        //setup animations
        this.requires("SpriteAnimation, Collision, Grid")
        .animate("walk_left", 6, 3, 8)
        .animate("walk_right", 9, 3, 11)
        .animate("walk_up", 3, 3, 5)
        .animate("walk_down", 0, 3, 2)

		//change direction when a direction change event is received
		.bind("NewDirection",
		    function (direction) {
		        if (direction.x < 0) {
		            if (!this.isPlaying("walk_left"))
		                this.stop().animate("walk_left", 10, -1);
		        }
		        if (direction.x > 0) {
		            if (!this.isPlaying("walk_right"))
		                this.stop().animate("walk_right", 10, -1);
		        }
		        if (direction.y < 0) {
		            if (!this.isPlaying("walk_up"))
		                this.stop().animate("walk_up", 10, -1);
		        }
		        if (direction.y > 0) {
		            if (!this.isPlaying("walk_down"))
		                this.stop().animate("walk_down", 10, -1);
		        }
		        if(!direction.x && !direction.y) {
		            this.stop();
		        }
		})
		.onHit("solid", function () {
		    //Move unit out of solid tile
		})
		.bind('Moved', function(from) {
		    if(this.hit('solid')){
		        this.attr({x: from.x, y:from.y});
		    }
		})
	}
	
});

var player1 = Crafty.e("2D, DOM, player, Player, PlayerControls, BombDropper")
        .attr({ x: 16, y: 304, z: 1 })
        .css({ 'border': '1px solid #f0f', 'z-index' : '99'})
        //.tint("#969696", 0.3);

}