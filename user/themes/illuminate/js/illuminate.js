$(document).ready(function() {

	$('.quick-contact-button').click(function() {
		$('#service-select option').removeAttr('selected');
		$('#service-select option[value=' + $(this).attr('data-select') +' ]').attr('selected', 'selected');
	});
	
});