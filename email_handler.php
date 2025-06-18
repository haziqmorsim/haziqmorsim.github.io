<?php
if(isset($POST['submit'])) {
    $to = "haziqmorsim@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message  =$_POST['message'];

    $headers = "From:" . $from;
    $headers = "To:"  . $to;
    mail($to, $subject, $message, $headers);
    echo "Message was sent successfully."
}
?>