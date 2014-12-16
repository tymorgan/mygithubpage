


	

// $('.box').click(
// 	function(){
// 	console.log("THis is working");
// 	$(this).animate({width: "500px", height: "500px", }, 1000);
	
// 	}
// );



function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});




// $('#pic1').click(function(){
// 	var clickedPic = $('.gallery').attr('src');
// 	console.log(clickedPic);
// 	$('#modalPic').attr('src', clickedPic);
// 	return;
// });

// $('#pic2').click(function(){
// 	$('#modalPic').attr('src', 'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/14269_10201827292322909_8716292908500092857_n.jpg?oh=fada7472d7541464b2766c41dfdf9e86&oe=54B751D1&__gda__=1420596716_e0a4ec4f9a5f24d1e9f2ca85e306e66f');
// 	return;
// });


$('.box').click(function(){
	var source = $(this).find("img").attr("src");
	console.log(source);
	$('#modalPic').attr('src', source);
	return;
});




