var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var max= testArray[0];
for (var i=1; i< testArray.length; i++){
    
	if (testArray[i]> max){
		max= testArray[i];
}
}
console.log(max);