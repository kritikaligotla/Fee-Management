$(document).ready(function(){
	$("#submit").click(function(){
		var date = $("#date").val();
		if($("#date").val()=='')
		{
			alert("Please enter the exact date");
			$("#date").focus();
			return false;
		}
		else
		{
			$.ajax({
				type: 'POST',
				url:  'view_date.php',
				data: {date:date},
				dataType: 'json',
				cache:false,				
				success: function(result){
					if(result.status==200)
					{
						//window.location = 'payment_home.html';
						window.location.replace('*****.html');
					}
					else
					{
						alert("Invalid date");
						return false;
					}
				}
			});
			return false;
		}
	});
});