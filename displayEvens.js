
function printEvenNums(){
var start = parseInt(document.getElementById("starting").value);
var end = parseInt(document.getElementById("ending").value);
var step = parseInt(document.getElementById("step").value);
 var evenNums = '<br>Here are even numbers between start and end:</br>'
 validateItems();
 for(i=start; i<=end; i=i + step){
 if(i%2 == 0){
            evenNums += i + '<br>';
		
          }
		  }
		
		  document.getElementById("result").innerHTML = evenNums;
		  }
		  
    function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["displayEvens"].elements.length; 
        loopCounter++) {
        if (document.forms["displayEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["displayEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}



function validateItems() {
    clearErrors();
    var start = document.forms["displayEvens"]["starting"].value;
    var end = document.forms["displayEvens"]["ending"].value;
	
    if (start == "" || isNaN(start)) {
        alert("Starting number must be filled in with a positive number.");
        document.forms["displayEvens"]["starting"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["starting"].focus();
        return false;
    }
	

   if (end == "" || isNaN(end)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["displayEvens"]["ending"]
          .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["ending"].focus();
       return false;
   }
    start = parseInt(document.forms["displayEvens"]["starting"].value);
     end = parseInt(document.forms["displayEvens"]["ending"].value);
   if(start >= end){
	   alert("Ending number must be greater than starting number.");
        document.forms["displayEvens"]["starting"]
           .parentElement.className = "form-group has-error";
		   document.forms["displayEvens"]["starting"].focus();
        return false;
    }
	var step = parseInt(document.getElementById("step").value);
	if(step < 0){
	   alert("Step should be a positive number.");
        document.forms["displayEvens"]["step"]
           .parentElement.className = "form-group has-error";
		  document.forms["displayEvens"]["step"].focus()
        return false;
    }
	   
  document.getElementById("result").style.display = "block";
  
  return false;
}
   
