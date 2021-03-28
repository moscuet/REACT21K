<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Jackpot assignment with php</h1>
<?php
    $randomizedRange = 1;
    function randomNum() {
        global $randomizedRange;
        $randomNum = rand(0, $randomizedRange);
        return $randomNum;
    }
   
    $randomArray = [];
    $counter = 0;
    while( $counter <5){
        $randomArray[$counter] = randomNum();
        $counter++;
    }
echo json_encode($randomArray);
$i = 0;
$countOne = 0;
$countZero = 0;

while(  $i < sizeof($randomArray)){
   echo ($randomArray[$i]);
    if( $randomArray[$i] == 0){
        $countZero++;
    }
    else {
        $countOne++;
    }
    $i++;
}
?>

</body>
</html>