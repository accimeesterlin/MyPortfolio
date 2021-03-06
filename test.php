 <?php
        if(isset($_POST['email'])) {

            $email_to = "esterlinaccime@gmail.com";
            $email_subject = "Website contact form";


            function died($error) {
                echo "We are very sorry, but there were error(s) found with the form you submitted. ";
                echo "These errors appear below.<br /><br />";
                echo $error."<br /><br />";
                echo "Please <a href='contact.php'>go back</a> and fix these errors.<br /><br />";
                die();
            }

            // validation expected data exists
            if(!isset($_POST['name']) ||
                !isset($_POST['email']) ||
                !isset($_POST['message'])) {
                died('Please include a name, email, and message.');      
            }

            $name = $_POST['name']; // required
            $email_from = $_POST['email']; // required
            $message = $_POST['message']; // required

            $error_message = "";
            $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
            if(!preg_match($email_exp,$email_from)) {
                $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
            }
            $string_exp = "/^[A-Za-z .'-]+$/";
            if(!preg_match($string_exp,$name)) {
                $error_message .= 'The name you entered does not appear to be valid.<br />';
            }
            if(strlen($message) < 2) {
                $error_message .= 'The Comments you entered do not appear to be valid.<br />';
            }
            if(strlen($error_message) > 0) {
                died($error_message);
            }

            function clean_string($string) {
                $bad = array("content-type","bcc:","to:","cc:","href");
                return str_replace($bad,"",$string);
            }

            $email_message = "Name: ".clean_string($name)."\n";
            $email_message .= "Email: ".clean_string($email_from)."\n\n";
            $email_message .= "Message: \n".clean_string($message)."\n";

            // create email headers
            $headers = 'From: '.$email_from."\r\n".
                'Reply-To: '.$email_from."\r\n" .
                'X-Mailer: PHP/' . phpversion();
            @mail($email_to, $email_subject, $email_message, $headers);
            echo '<script type="text/javascript">alert("Your message has been sent.");</script>';
        }
    ?>
