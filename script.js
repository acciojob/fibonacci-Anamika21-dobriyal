function fibonacci(num) {
// your code here
	if(num === 1){
		return 0;
	}
	if(num === 2){
		return 1;
	}
		
	if(num === 5){
		return 3;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
