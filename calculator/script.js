function numPad(button){
	document.getElementById('displayValue').value += button.innerHTML;
	
}


var firstNumber = '';
var secondNumber = '';
var selectedOperator = '';

// ('+', '-', '*', '/', '');


function operator(opr){
	firstNumber = parseFloat(document.getElementById('displayValue').value);
	document.getElementById('displayValue').value = '';
	selectedOperator = opr;
	

}

function equals(){
	secondNumber = parseFloat(document.getElementById('displayValue').value);
	var total = '';

	if(selectedOperator == '+'){
		total = firstNumber + secondNumber;
	}
	else if(selectedOperator == '-'){
		total = firstNumber - secondNumber;
	}
	else if(selectedOperator == '*'){
		total = firstNumber * secondNumber;
	}
	else if(selectedOperator == '/'){
		total = firstNumber/ secondNumber;
	}
	else{
		alert('There is an error');
	}

	document.getElementById('displayValue').value = total;
}





