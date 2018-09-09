$(document).ready(function() {

	$('.button.quick-contact').click(function() {
		$('#service-select option').removeAttr('selected');
		$('#service-select option[value=' + $(this).attr('data-select') +' ]').attr('selected', 'selected');
	});

	$('#contact-form').submit(function(e) {
		$('.phone').each(function() {
			if ($(this).val() !== "") {
				e.preventDefault();
				location.reload();
			}
		});
	});

	$('a[target="_blank"]').each(function() {
		$(this).attr('rel', 'noopener noreferrer');
	});
	
});
