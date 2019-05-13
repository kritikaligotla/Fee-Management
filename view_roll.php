<?php
include "database.php";

if($conn->connect_error)
{
	die("Connection failed:" . $conn->connect_error);
}
else
{
$roll_no=$_REQUEST['roll_no'];
$sql="SELECT * FROM fee_details WHERE roll_number='".$roll_no."'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) 
{    
	echo json_encode(array("status"=>200,"message"=>"success"));
} 
else 
{
    echo json_encode(array("status"=>400,"message"=>"failed"));
}
}


?>