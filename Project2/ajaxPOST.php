<?php 
    if(isset($_POST['data'])){
        $data = json_decode($_POST['data'], true);
        
		$conn = new mysqli("localhost", "root", "", "project");
		
        if($conn->connect_error){
            die($conn->connect_error);
        }
        
		$event = $data['type'];
        $eventTarget = $data['target'];
        $eventTime = $data['time'];
        $sql = "INSERT INTO data VALUES('$event', '$eventTarget', '$eventTime')";
        $conn->query($sql);
    }

?>