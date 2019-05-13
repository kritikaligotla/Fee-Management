$(document).ready(function(){
	$("#submit").click(function(){
		var roll_no="166k1a0548";
		//var roll_no = $("#roll_no").val();
		//document.getElementById("#insert").innerHTML=roll_no;
		if($("#roll_no").val()=='')
		{
			alert("Please enter your Roll number");
			$("#roll_no").focus();
			return false;
		}
		else
		{
			$.ajax({
				type: 'POST',
				url:  'view_roll.php',
				data: {roll_no:roll_no},
				dataType: 'json',
				cache:false,				
				success: function(result){
					if(result.status==200)
					{
						//window.location = 'payment_home.html';
						window.location.replace('check.php');
						//alert("valid Roll number");
					}
					else
					{
						alert("Invalid Roll number");
						return false;
					}
				}
			});
			return false;
		}
	});
});