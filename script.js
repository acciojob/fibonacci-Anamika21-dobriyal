function fibonacci(num) {
// your code here
	// if(num === 1){
	// 	return 0;
	// }
	// if(num === 2){
	// 	return 1;
	// }
		
	// if(num === 5){
	// 	return 3;
	// }
	// return fibonacci(num - 1) + fibonacci(num - 2); 
	if (num === 0) return 0;
    if (num === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

module.exports = fibonacci;
