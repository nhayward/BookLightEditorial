$(document).ready(function() {

	$('.button.quick-contact').click(function() {
		$('#service-select option').removeAttr('selected');
		$('#service-select option[value=' + $(this).attr('data-select') +' ]').attr('selected', 'selected');
	});

	$('#contact-form').submit(function(e) {
		if ($('#honeypot').val() !== "") {
			e.preventDefault();
			location.reload();
		}
	});
	
});
