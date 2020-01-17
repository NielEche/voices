var q = 1

	$(document).ready(function() {
		$(".questions").hide();
		$("#question1").show();

		$("#next").click(function() {

			$("#question" + q).hide();
			q = q + 1;
			if(q > 5) {
				$("next") .remove();
				$("body").append("<input type='submit' value='submit'>");
			} else {
				$("#question" + q).show();
			}
		});
	});