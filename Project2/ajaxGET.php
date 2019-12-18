<?php
    if(isset($_GET['data'])){
        $sql = "SELECT * FROM project";
        $conn = new mysqli("localhost", "root", "", "project");
        if($conn->connect_error){
            die($conn->connect_error);
        }
    }
    if($result = $conn->query($sql)){
        $rows = array();
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                array_push($rows, $row);
            }
            echo json_encode($rows);
        }
    }

?>