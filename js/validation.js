$(document).ready(function(){
	$("#submit").click(function(){
		var user = $("#user").val();
		var pass = $("#pass").val();
		
		if($("#user").val()=='')
		{
			alert("Please enter your username");
			$("#user").focus();
			return false;
		}
		
		else if($("#pass").val()=='')
		{
			alert("Please enter your password");
			$("#pass").focus();
			return false;
		}
		else
		{
			$.ajax({
				type: 'POST',
				url:  'connect.php',
				data: {user1:user,pass1:pass},
				dataType: 'json',
				cache:false,				
				success: function(result){
					if(result.status==200)
					{
						//window.location = 'payment_home.html';
						window.location.replace('choose.html');
					}
					else
					{
						alert("Invalid credentials");
						return false;
					}
				}
			});
			return false;
		}
	});
});