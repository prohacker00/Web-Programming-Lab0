<?php

$username = filter_input(INPUT_POST, 'user');
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
            $sql = "SELECT * FROM connectscore WHERE username = '".$username."' && password = '". $password."';";
           $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                echo "<script type = 'text/javascript'>alert('Welcome');
                location.replace('index.html');
                </script>";
            }
            else {
                echo "<script type = 'text/javascript'>alert('Wrong Details.');
                location.replace('signin_shadow.html');
                </script>";
            }

            $conn->close();
        }
    }
    else{
        echo "Score should not be empty";
        die();
    }
}
else{
    echo "Username should not be empty";
    die();
}
?>
