<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Number counting</h1>
    <?php 
      $randomNumber = rand(0,100);
    //   $part1Text = '';
    //   $part2Text= '';
    $part1 = $randomNumber%10;
    $part2 = floor($randomNumber/10);
    $numberText ='';
    $result ='';
    echo "The number is: $randomNumber<br>";
    if($part2===1){
        switch($part1){
            case 0 : $result= 'kymmenen';
            break;
            case 1 : $result= 'yksitoista';
            break;
            case 2 : $result= 'kaksitoista';
                break;
            case 3 : $result= 'kolmetoista';
                break;
            case 4 : $result= 'neljatoista';
                break;
            case 5 : $result= 'viisitoista';
                break;
            case 6 : $result= 'kuusitoista';
                break;
            case 7 : $result= 'seitsemäntoista';
                break;
            case 8 : $result= 'kahdeksantoista';
                break;
            case 9 : $result= 'yhdeksäntoista';
                break;
            default:
        }
    } else { 
        switch($part2){
            case 2 : $result= 'kaksikymmentä';
                break;
            case 3 : $result= 'kolmekymmentä';
                break;
            case 4 : $result= 'neljakymmentä';
                break;
            case 5 : $result= 'viisikymmentä';
                break;
            case 6 : $result= 'kuusikymmentä';
                break;
            case 7 : $result= 'seitsemänkymmentä';
                break;
            case 8 : $result= 'kahdeksankymmentä';
                break;
            case 9 : $result= 'yhdeksänkymmentä';
                break;
                default: $result = '';
        }
        switch($part1){
            case 1 : $result.= 'yksi';
                break;
            case 2 : $result .= 'kaksi';
                break;
            case 3 : $result .= 'kolme';
                break;
            case 4 : $result .= 'nelja';
                break;
            case 5 : $result .= 'viisi';
                break;
            case 6 : $result .= 'kuusi';
                break;
            case 7 : $result .= 'seitsemän';
                break;
            case 8 : $result .= 'kahdeksan';
                break;
            case 9 : $result .= 'yhdeksän';
                break;
            default: $result .= '';
            }
    }
    echo "NUmber in Finnish: $result"

    ?>
</body>
</html>
