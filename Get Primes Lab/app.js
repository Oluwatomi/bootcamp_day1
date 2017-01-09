'use strict'

module.exports = {
	getPrimes: function(n){

		if(typeof n === "number"){
			var init_arr = [];
			var primes_arr = [];

			var stop = Math.sqrt(n);

			for (var i = 2; i <= n; i++) {
				init_arr[i] = true;
			}

			for (var i = 2; i <= stop; i++) {
				if(init_arr[i]){
					for (var j = i * i; j <= n; j+=i) {
						init_arr[j] = false;
					}
				}
			}

			for (var i = 2; i <= n; i++) {
				if(init_arr[i]){
					primes_arr.push(i);
				}
			}
			return primes_arr;

		}
		else{
			return "Input must be a Number";
		}
	}

}

//console.log(getPrimes(-1));