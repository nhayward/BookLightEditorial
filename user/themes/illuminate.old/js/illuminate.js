var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 55 )
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}

$(document).ready(function() {
	// ON SCROLL EVENTS
	if (!isTouch){
	    $(document).scroll(function() {
	        scrollHeader();
	    });
	};

	// TOUCH SCROLL
	$(document).on({
	    'touchmove': function(e) {
	        scrollHeader(); // Replace this with your code.
	    }
	});
});