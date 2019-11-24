<?php

$username = filter_input(INPUT_POST, 'newuser');
$password = filter_input(INPUT_POST, 'pass');
if(!empty($username)){
    if(!empty($password)){
        $host = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $dbname = "connectscore";

        //Create Connection
        $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

        if (mysqli_connect_error()){
            die('Connect Error ('. mysqli_connect_errno() .') '
                . mysqli_connect_error());
        }
        else{
            $sql = "INSERT INTO connectscore (username, password)
            values ('$username','$password')";
            if ($conn->query($sql)){
                echo "<script type='text/javascript'>alert('The mail has been sent');</script>";
                 header("Location: signup.html?mailsend");

                
            }
            else{
                echo "Error: ". $sql ."<br>". $conn->error;
            }
            $conn->close();
        }
    }
    else{
        echo "Password should not be empty";
        die();
    }
}
else{
    echo "Username should not be empty";
    die();
}
?>
