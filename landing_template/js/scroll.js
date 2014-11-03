$(function() {

	$('a').each( function() {
	    var $this = $(this), 
	        target = this.hash;
		    $(this).click(function (e) { 
		        
		       if(target == '#homeHeader' || target == '#aboutSection' || target == '#workSection' || target == '#contactSection'){
		       	   e.preventDefault();
		           $('html, body').animate({ 
		                scrollTop: ($(target).offset().top)
		            }, 1000);
		       } 
	    });
	});  
  
});



