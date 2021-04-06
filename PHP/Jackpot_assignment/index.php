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
    $numberString ='';
    $j = 0;
    while( $j < 5){
        global $j, $numberString, $winCount, $roundCount ;
       
        $roundCount = $roundCount + 1;
        $RandomNumber = randomNum();
        $numberString = $numberString . $RandomNumber ;
        
        $j= $j+1;
        if($j==5){  
            if( $numberString === '11111'){
                echo "Hurrey You have won jackpot!!";
            }else if($numberString === 'OOOOO'){
                echo"congradulation, you got all Zero. Good luck for nexttime";
            }else {
                $j = 0;
                $numberString = '';
            }
        };
    };
    return $roundCount;
};


$totalWinTarget = 5;
$winCounter = 0;
$totalRoundToPlay = 0;


while ($winCounter < $totalWinTarget ){
    $totalRoundToPlay  = $totalRoundToPlay +  RoundToWinJackpot();
    $winCounter = $winCounter + 1;
}
echo '<br><br>';
echo "total rounds played to win Jackpot $winCounter times is $totalRoundToPlay";
echo '<br><br>';

$avgRoundToWin = $totalRoundToPlay/$totalWinTarget;
$avgMoneyToWin = ($avgRoundToWin*50)/100;

echo "average number of rounds need to play to win a jackpot:: $avgRoundToWin";
echo '<br><br>';
echo "average amount of money need to spend to win a jackpot: $avgMoneyToWin";
echo '<br><br>';

 $jackpotPrize = 30000;
 $result = 30000 > $avgMoneyToWin? 'profit' : 'loss';
 $amount = $result =='loss'? $avgMoneyToWin - 30000 : 30000 - $avgMoneyToWin;
 echo "Your $result from jackpotPrize is $amount"
?>

</body>
</html>