  <?php
//Connection for database
include 'database.php';
//Select Database

//$name=localStorage["roll_no1"];
$roll_no="A501";
$sql = "SELECT * FROM student_details WHERE roll_no='$roll_no'";
$result = $conn->query($sql);
?>
<!doctype html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<body>
<h1 align="center">Student Details</h1>
<table border="1" align="center" style="line-height:25px;">
<tr>
							<!--<th>id_n</th>-->
							<th>S_no</th>
							<th>Roll_No</th>
							<th>Name</th>
							<th>Batch</th>
							<th>Branch</th>
							<th>Semester</th>
							<th>Total_TF</th>
							<th>Paid_TF</th>
							<th>Total_BF</th>
							<th>Paid_BF</th>
							<th>Total_CRT</th>
							<th>Paid_CRT</th>
							<th>Total_LabDam</th>
							<th>Paid_LabDam</th>
</tr>
<?php
//Fetch Data form database
if($result->num_rows > 0){
 while($row = $result->fetch_assoc()){
 ?>
 <tr>
 <td><?php echo $row['s_no']; ?></td>
 <td><?php echo $row['roll_no']; ?></td>
 <td><?php echo $row['name']; ?></td>
 <td><?php echo $row['batch']; ?></td>
 <td><?php echo $row['branch']; ?></td>
 <td><?php echo $row['semester']; ?></td>
 
 <td><?php echo $row['total_tf']; ?></td>
 <td><?php echo $row['paid_tf']; ?></td>
 <td><?php echo $row['total_bf']; ?></td>
 <td><?php echo $row['paid_bf']; ?></td>
 <td><?php echo $row['total_crt']; ?></td>
 <td><?php echo $row['paid_crt']; ?></td>
 <td><?php echo $row['total_labdam']; ?></td>
 <td><?php echo $row['paid_labdam']; ?></td>
 </tr>
 <?php
 }
}
else
{
 ?>
 <tr>
 <th colspan="2">There's No data found!!!</th>
 </tr>
 <?php
}
?>
</table>
<script src="js/roll_validation.js"></script>
</body>
</html>