<?php
  $name = $_POST['text'];
  $visitor_email = ['email'];
  $visitor_number = ['phone'];
  $message = $_POST['message'];

  $email_from = 'support@ds-consulting.co.za';

  $email_sublject = "Client request";

  $email_body = "User Name:$name.\n"."User Email:$visitor_email.\n"."User Message: $message.\n";

  $to = "fumani.mthembi@ds-consulting.co.za";

  $headers = "From: $email_from\r\n";

  $headers .= "Reply-To: $visitor_email\r\n";

  mail($to,$email_sublject,$email_body)

?>