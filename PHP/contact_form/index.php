<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" id ="submission-form" action = "https://public.bc.fi/s2100146/php/contact_form/contact.php">
      <input type = "text" name = "username" id ="username" placeholder = "username">
      <input type = "password" name = "password" id ="password" placeholder = "password">
      <input type = "email" name = "email" id ="email" placeholder = "email">

      <textarea name ="message" id =" message" cols="30" rows ="30"  placeholder=" message here"></textarea>
     <input type="submit">Send email</input>
    </form>
    <script src = './script.js'></script>
</body>
</html>