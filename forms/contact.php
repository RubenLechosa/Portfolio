
<!-- Para enviar correos -->
<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent = "De: $name \r\nCorreo: $email \r\nAsunto: $subject \r\nMensaje: $message \r\n";
date_default_timezone_set("Europe/Madrid");
$formcontent .= "Enviado el: " . date('d/m/Y h:i:sa');
$recipient = "info@rubenlechosa.com";
$mailheader = "De: Web Ruben \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error al enviar el mensaje!");
echo "Mensaje enviado, Gracias!";

?>
