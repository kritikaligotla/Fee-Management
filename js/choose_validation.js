$(document).ready(function(){
	$("#pay_fee").click(function(){
			$.ajax({
				type: 'POST',
				url:  'choose.html',
				dataType: 'json',
				cache:false,				
				success: function(result){
					if(result.status==200)
					{
						//window.location = 'payment_home.html';
						window.location.replace('payment_home.html');
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
	
	$("#view_details").click(function(){
			$.ajax({
				type: 'POST',
				url:  'choose.html',
				dataType: 'json',
				cache:false,				
				success: function(result){
					if(result.status==200)
					{
						//window.location = 'payment_home.html';
						window.location.replace('date/Date Dropper.html');
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