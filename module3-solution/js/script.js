function makeMultiplyer(multiplyer){
	var myFunc = function(x){
		console.log(multiplyer);
		console.log(x);
		return multiplyer * x;
	}

	return myFunc;
}

var multiplyBy3 = makeMultiplyer(3);

console.log(multiplyBy3(10));