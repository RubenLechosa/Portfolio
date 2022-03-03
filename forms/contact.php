<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $para = 'rubenlechosa@gmail.com';
  $asunto = "Mensaje de la Web Ruben Lechosa";


  $message = "Este mensaje fue enviado por: $name \n";
  $message .= "Su correo es: $email \n";
  $message .= "El asunto del correo es: $subject \n";
  $message .= "Mensaje: $message \n";
  $message .= "Enviado el: " . date('d/m/Y', time());

  $header = 'De: ' . $email . " \r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Conent-Type: text/plain";

  mail($para, $asunto, utf8_decode($message), $header);
  
  header('Location:convers.html')
  
  ?>
