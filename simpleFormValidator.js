var SimpleFormValidator = (function() {

	var elementsArray = [];
	var eleNameArray = [];
	var errorCount = 0;

	var validate = function(config) {

		if (typeof (config) !== 'undefined') {

			$('#'+config.formId).on('submit', function(event) {
				validateFormData(event,config);
			});

		}

	}

	var validateFormData = function(event, config) {

		errorCount = 0;

		if (typeof (event) !== 'undefined')
			event.preventDefault();

		// get all form inputs in array
		$("form#" + config.formId + " .form-fields").each(function() {
			elementsArray.push($(this));
			eleNameArray.push($(this).prop('name'));
		});

		$.each(config.rules, function(i, rule) {

			var index = $.inArray(rule.fieldName, eleNameArray);

			if (index >= 0) {

				var ele = elementsArray[index];

				// validation logic 1
				if (ele.val().trim() == "" && rule.required) {
					showErrors(ele, true, rule.message);
					errorCount++;
				} else {
					showErrors(ele, false, rule.message);
				}

				// validation logic 2
				if (rule.trimed)
					ele.val($.trim(ele.val()));

				// validation logic 3
				if (ele.val().trim().length > rule.length) {
					showErrors(ele, true, 'Field Length Exceeds to '
							+ ele.val().length + ' expected is ' + rule.length
							+ '.');
					errorCount++;
				}
			}
		});

		return errorCount;
	}

	function showErrors(ele, errorFlag, message) {

		if (errorFlag) {
			ele.css({
				"border-color" : "red"
			});
			ele.next().show().find('.error').html(message).show();
		} else {
			ele.css({
				"border-color" : ""
			});
			ele.next().hide();
		}
	}

	return {
		'validate' : validate
	}

}());
