<?php
$username = filter_input(INPUT_POST, 'username');
$email = filter_input(INPUT_POST, 'email');
$message = filter_input(INPUT_POST, 'message');
 if(!empty($username)){
 	if(!empty($email)){
 		$host = "localhost";
 		$dbusername = "root";
 		$dbpass = "";
 		$dbname = "contact";

		// Create Connection 
		$conn = new mysqli($host, $dbusername, $dbpass, $dbname);

		if(mysqli_connect_error()){
			die('Connect Error('.mysqli_connect_errno().')'
				. mysqli_connect_error());
		} else{
		 		$sql = "INSERT INTO contactusdb (name, email, message)
             values ('$username','$email','$message')";
             if ($conn->query($sql)){
             	echo "<script type='text/javascript'>alert('The mail has been sent');</script>";
                    header("Location: contactUs.html?mailsend");
             }
             else{
             	echo "Error: ". $sql . "<br>". $conn->error;
             }
             $conn->close();
         }
     }
     else{
     	echo " Message should not be empty";
     	die();
     }

 }

 else{
 	echo "Username should not be empty";
 	die();
 }

?>
