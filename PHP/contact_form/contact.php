<?php 



echo '<pre>';

print_r($_POST);

echo '</pre>';

$userName = $_POST['username'];
$userEmail = $_POST['email'];
$password = $_POST['password'];
$message = $_POST['message'];

$to ="mos.cuet@gmail.com";
$subject = 'sent from test php';

//$body = '';
// $body .= "From :".$userName. "\r\n";
// $body .= "Email :".$userEmail. "\r\n";
// $$body .= "Message :".$message. "\r\n";

$headers = array(
  'From' => 's2100146@bc.edu.fi',
  'Reply-To' => 's2100146@bc.edu.fi',
  'X-Mailer' => 'PHP/' . phpversion()
);

echo "body $body";
echo '<br>';



  $sent_status = mail($to, $subject,$message,$headers);
  if($sent_status){
      echo "message was delivered";
  }else {
      echo 'message wasn\'t delivered';
  }
?>