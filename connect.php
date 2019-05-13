<?php
$servername="localhost";
$username="root";
$password="";
$dbname="users";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);


// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

else
{

$user = $_REQUEST['user1'];
$pass = $_REQUEST['pass1'];

$sql = "select * from admins where User_Name='".$user."' and Password='".$pass."'";

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