<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php testing</title>
</head>
<body>

<?php 


function SomeFunc(){
    $greeting = 'hello';
   echo "from function: $greeting";
   echo "from function:" . $GLOBALS['greeting'];
   echo "<br>";
   echo "<br>";
}


$greeting = "houmenta";
echo "<br>";
SomeFunc();

?>
    
</body>
</html>