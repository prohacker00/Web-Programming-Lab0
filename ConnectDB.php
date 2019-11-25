<?php

$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'score');
if(!empty($username)){
    if(!empty($score)){
        $host = "localhost";
        $dbusername = "root";
        $dbscore = "root";
        $dbname = "sqlshadowrise";
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
