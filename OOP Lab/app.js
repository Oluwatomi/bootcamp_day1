module.exports = {
	Animal: function(type, sound){

		this.type = (type === undefined)? "Unknown Animal": type;
		this.sound = (sound === undefined)? "Trying to make a sound...": sound;

	    this.numOfLegs = 4; // Let an Animal have 4 legs by default

	    this.say = function(){
	    	this.saying = this.type + " says: " + this.sound ;
	    }

	    this.move = function(){
	    	this.moving = this.type + " is moving ";
	    }

	    if(this.type === "Chicken"){
	    	this.numOfLegs = 2;
	    }

	     if(this.type === "Bird"){
	    	this.numOfLegs = 2;
	    	this.move = function(){
	    		this.moving = this.type + " is Flying " ;

	    	}
	    }

	    if(this.type === "Fish"){
	    	this.numOfLegs = 0;
	    	this.move = function(){
	    		this.moving = this.type + " is Swimming ";
	    	}
	    }

	}
}