Crafty.c("PlayerControls", {

    init: function() {
    	console.log('automatically added');
        this.requires('Multiway, KeyBoard').multiway(2, {W: -90, S: 90, D: 0, A: 180 })
        	.bind('KeyDown', function (e) { 
        		console.log(e.key);
        		if(e.key == Crafty.keys['SPACE']) this.doSomething(); 
        	});;
    },
    
	doSomething: function() {
    	console.log('piaow piaow')

    }
    
});
