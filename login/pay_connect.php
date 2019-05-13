<?php

include_once("database.php");


$fee = $_REQUEST["fee_type1"];
$rollnumber = $_REQUEST['rollno1'];
$branch = $_REQUEST['branch1'];
$semester = $_REQUEST['semester1'];
$amount = $_REQUEST['amount1'];
// Check connection


$sql = "INSERT INTO fee_details (Category,Roll_Number,Branch,Semester,Amount)
VALUES ('$fee','$rollnumber','$branch',$semester,$amount)";

if (mysqli_query($conn, $sql)) {
	echo json_encode(array("status"=>200,"message"=>"Payment Successfull!!!"));
}
 else {
    echo json_encode(array("status"=>400,"message"=>"Error !!!"));
}

mysqli_close($conn);
?>