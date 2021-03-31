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
   
   $randomizedRange = 10;
    
function randomNum() {
    global $randomizedRange;
    $randomNum = rand(0, $randomizedRange);
    return ($randomNum % 2);
}

function RoundToWinJackpot () {
    $round = 0;
    $numberString ='';
    $winCount = 0;
    $roundCount = 0;
    $j = 0;
    while( $j < 5){
        global $j, $numberString, $winCount, $roundCount ;
       
        $roundCount = $roundCount + 1;
        $RandomNumber = randomNum();
        $numberString = $numberString . $RandomNumber ;
        
        $j= $j+1;
        if($j==5){  
            if( $numberString === '11111'){
                $winCount = $winCount +1;
            }
            if($winCount===5) {
                echo "mission accomplesed. ein Count: $winCount. round count: $roundCount";

                return $roundCount;
            }
            $j = 0;
            $numberString = '';
        };
    };
    
    return $roundCount;
};

RoundToWinJackpot()




?>

</body>
</html>