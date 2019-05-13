<?php
$servername="localhost";
$username="root";
$password="";
$dbname="payment";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    echo  mysqli_connect_error();
}

?>