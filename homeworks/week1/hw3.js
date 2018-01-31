export const isPrime = (n) => {
  var isPrime = true;
	
	if(n === 1) return false;
       
	for (var i = 2; i < Math.sqrt(n+1); i++){
		if (n % i === 0) { 
			 isPrime = false;
		}
		
	}
	return isPrime;
}