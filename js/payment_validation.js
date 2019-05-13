$(document).ready(function(){
	$("#pay").click(function(){
		var fee_type = $("#fee_type").val();
		var branch = $("#branch").val();
		var rollno = $("#rollno").val();
		var semester = $("#semester").val();
		var amount = $("#amount").val();
		
		if($("#fee_type").val()=='')
		{
			alert("Please enter your fee_type");
			$("#fee_type").focus();
			return false;
		}
		
		else if($("#branch").val()=='')
		{
			alert("Please enter your branch");
			$("#branch").focus();
			return false;
		}
		else if($("#rollno").val()=='')
		{
			alert("Please enter your rollno");
			$("#rollno").focus();
			return false;
		}
		else if($("#semester").val()=='')
		{
			alert("Please enter your semester");
			$("#semester").focus();
			return false;
		}
		else if($("#pass").val()=='')
		{
			alert("Please enter your password");
			$("#pass").focus();
			return false;
		}
		else if($("#amount").val()=='')
		{
			alert("Please enter your amount");
			$("#amount").focus();
			return false;
		}		
		else
		{
			$.ajax({
				type: 'POST',
				url:  'pay_connect.php',
				data: {fee_type1:fee_type,branch1:branch,semester1:semester,rollno1:rollno,amount1:amount},
				dataType: 'json',
				cache:false,				
				success: function(result){
					if(result.status==200)
					{
						//window.location="pay_connect.php";
						window.location.replace('print/index.html');
					}
					else
					{
						alert(result.message);
					}
				}
			});
			return false;
		}
	});
});