$(document).ready(function() {

	$('.button.quick-contact').click(function() {
		$('#service-select option').removeAttr('selected');
		$('#service-select option[value=' + $(this).attr('data-select') +' ]').attr('selected', 'selected');
	});

	$('#contact-form, #quick-contact-form').submit(function() {
		var url = "https://script.google.com/macros/s/AKfycbz5QG_vIto9CssV9hKWBazzSYEKvtoXVZs0lo3tf37Githsy0RZ/exec";
		var formData = $(this).serializeArray();
		var data = {
			"Date": new Date(),
			"Name": formData[0].value,
			"Email": formData[1].value,
			"Service": formData[2].value,
			"Message": formData[3].value
		};
		$.post(url, data);
	});
	
});