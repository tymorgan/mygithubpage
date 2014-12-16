var currentPlayer = '<span> X </span>';
var letter = "letter";




$('.box').click(function(){
	if ($(this).hasClass('usedBox')) {
		alert("That box is already taken!");
		return;
	};

	$(this).append(currentPlayer);

	$(this).addClass('usedBox');

	if (currentPlayer == '<span> X </span>') {
		currentPlayer = '<span> O </span>';
	}
	else if (currentPlayer == '<span> O </span>') {
		currentPlayer = '<span> X </span>';
	};

	if (currentPlayer == '<span> O </span>') {
		letter = "X";
	}
	else {
		letter = "O";
	};

	console.log(letter);
	checkWinner();

});

function checkWinner(){
	// 1,2,3
	if ($('#win1').html() == $('#win2').html() &&
		$('#win2').html() == $('#win3').html() &&
		 $('#win1').html() !== $('#winN').html()
		 ) 
	{
		$('#win1,#win2,#win3').addClass('blue');
		alert("The winner is player " + letter + ".");
	}
	// 4,5,6
	else if ($('#win4').html() == $('#win5').html() &&
		$('#win5').html() == $('#win6').html() &&
		 $('#win4').html() !== $('#winN').html()
		 ) 
	{
		$('#win4,#win5,#win6').addClass('blue');
		alert("The winner is player " + letter + ".");
	}
	// 7,8,9
	else if ($('#win7').html() == $('#win8').html() &&
		$('#win8').html() == $('#win9').html() &&
		 $('#win7').html() !== $('#winN').html()
		 ) 
	{
		$('#win7,#win8,#win9').addClass('blue');
		alert("The winner is player " + letter + ".");
	}
	// 1,4,7
	else if ($('#win1').html() == $('#win4').html() &&
		$('#win4').html() == $('#win7').html() &&
		 $('#win1').html() !== $('#winN').html()
		 ) 
	{
		$('#win1,#win4,#win7').addClass('blue');
		alert("The winner is player " + letter + ".");
	}
	// 2,5,8
	else if ($('#win2').html() == $('#win5').html() &&
		$('#win5').html() == $('#win8').html() &&
		 $('#win2').html() !== $('#winN').html()
		 ) 
	{
		$('#win2,#win5,#win8').addClass('blue');
		alert("The winner is player " + letter + ".");
	}
	// 3,6,9
	else if ($('#win3').html() == $('#win6').html() &&
		$('#win6').html() == $('#win9').html() &&
		 $('#win3').html() !== $('#winN').html()
		 ) 
	{
		$('#win3,#win6,#win9').addClass('blue');
		alert("The winner is player " + letter + ".");
	}
	// 1,5,9
	else if ($('#win1').html() == $('#win5').html() &&
		$('#win5').html() == $('#win9').html() &&
		 $('#win9').html() !== $('#winN').html()
		 ) 
	{
		$('#win1,#win5,#win9').addClass('blue');
		alert("The winner is player " + letter + ".");
	}
	// 3,5,7
	else if ($('#win3').html() == $('#win5').html() &&
		$('#win5').html() == $('#win7').html() &&
		 $('#win7').html() !== $('#winN').html()
		 ) 
	{
		$('#win3,#win5,#win7').addClass('blue');
		alert("The winner is player " + letter + ".");

	};



};


