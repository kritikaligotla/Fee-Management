$(document).ready(function(){
	$("#submit").click(function(){
		var roll_no = $("#roll_no").val();
		var category=$("#category").val();
		var branch=$("#branch").val();
		var batch=$("#batch").val();
		var date=$("#date").val();
		
		var check_roll_no = document.getElementById("#roll_no").checked;
		var check_category=document.getElementById("#category").checked;
		var check_branch=document.getElementById("#branch").checked;
		var check_batch=document.getElementById("#batch").checked;
		var check_date=document.getElementById("#date").checked;
		if(check_roll_no.val()==true)
		{
			if($("#roll_no").val()=='')
			{
				alert("Please enter your Roll number");
				$("#roll_no").focus();
				return false;
			}
		}
		if(check_category.val()==true)
		{
			if($("#category").val()=='')
			{
				alert("Please enter your category");
				$("#category").focus();
				return false;
			}
		}
		if(check_branch.val()==true)
		{
			if($("#branch").val()=='')
			{
				alert("Please enter your branch");
				$("#branch").focus();
				return false;
			}
		}
		if(check_batch.val()==true)
		{
			if($("#batch").val()=='')
			{
				alert("Please enter your batch");
				$("#batch").focus();
				return false;
			}
		}
		if(check_date.val()==true)
		{
			if($("#date").val()=='')
			{
				alert("Please enter the exact date");
				$("#date").focus();
				return false;
			}
		}
		else
		{
			$.ajax({
				type: 'POST',
				url:  'view_cat.php',
				data: {roll_no:roll_no,category:category},
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
						alert("Invalid Data!");
						return false;
					}
				}
			});
			return false;
		}
	});
});