<?php

	$name=$_GET["name"];
	$message=$_GET["message"];

	// $message = wordwrap($message,70);
	if(mail("adalmira@up.edu.ph",$name, $message)){
		header("location: ../collaborate_with_us.html");
	}

	else { echo "Not Successful";}

?>
