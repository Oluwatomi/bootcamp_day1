'use strict'

module.exports = {
	
	dataTypes: function(n){
		
		if(typeof n === "string"){
			return n.length;
		}else if(n == null){
			return 'no value';
		}else if(typeof n === "boolean"){
			return n;
		}else if(typeof n === "number"){
			if(n > 100){
				return 'more than 100';
			}else if (n < 100){
				return 'less than 100';
			}else{
				return 'equal to 100';
			}
		}else if(n.constructor === Array){
			if(n.length < 3){
				return undefined;
			}else{
				return n[2];
			}
		}else if(typeof n === "function"){
			return n(true);
		}

	}

}