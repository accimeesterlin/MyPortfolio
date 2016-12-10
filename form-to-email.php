<?php
if(isset($_POST['submit']) ){
// This page should not be accessed directly. Need to submit the form 
	echo "Error; you need to submit the form!"
}
$name = $_POST['name'];


$visitor_email = $_POST['email'];


$message = $_POST['message'];


// Validate First

if(empty($name) || empty($visitor_email)){
	echo "Name and email are mandotory!";
	exit;
}

$email_from = 'esterlinaccime@gmail.com';
$email_subject = "New Form Submission";
$email_body = "You have received a new message from the user $name.\n".
	"Email address: $visitor_email\n".
	"Here is the message:\n $message".
$to = "esterlinaccime@gmail.com";
$headers = "From: $email_from \r\n";

// Send the email
mail($to, $email_subject, $email_body, $headers);
echo "<p> Your message has been sent!</p>";
?>