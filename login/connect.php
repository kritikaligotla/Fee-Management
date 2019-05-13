<?php

include_once("database.php");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

else
{

$user = $_REQUEST['user1'];
$pass = $_REQUEST['pass1'];

$sql = "select * from login where username='".$user."' and password='".$pass."'";

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