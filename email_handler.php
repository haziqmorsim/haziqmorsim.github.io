<?php
// if(isset($POST['submit'])) {
//     $to = "haziqmorsim@gmail.com";
//     $from = $_POST['email'];
//     $name = $_POST['name'];
//     $subject = $_POST['subject'];
//     $message  =$_POST['message'];

//     $headers = "From:" . $from;
//     $headers = "To:"  . $to;
//     mail($to, $subject, $message, $headers);
//     echo "Message was sent successfully."
// }
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "haziqmorsim@gmail.com";
    $subject = $_POST["subject"];
    $message = "Name: " . $_POST["name"] . "\nE-mail: " . $_POST["email"] . "\n\nMessage: " . $POST["message"];
    $headers = "From: " . $_POST["email"];

    if(mail($to, $subject, $message, $headers)) {
        echo "Message was sent successfully.";
    } else {
        echo "Failed to send message.";
    }
}
?>