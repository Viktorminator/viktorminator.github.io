/* eslint-disable no-tabs */
// magic.js
$(document).ready(function() {
	// process the form
	$('#submission').on('click', function(event) {
		event.preventDefault();
		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'name': $('input[name=form-person]').val(),
			'phone': $('input[name=form-phone]').val(),
			'calltime': $('input[name=form-calltime]').val(),
			'question': $('input[name=form-question]').val()
		};
		console.log(formData);
		// process the form
		$.ajax({
				type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
				url: 'http://kls.modx.ws/postHere.php',
				crossDomain: true,
				data: formData, // our data object
				dataType: 'json', // what type of data do we expect back from the server
				encode: true
			})
			// using the done promise callback
			.done(function(data) {
				// log data to the console so we can see
				console.log(data);

				// here we will handle errors and validation messages
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});
});
