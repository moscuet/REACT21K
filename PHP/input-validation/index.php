<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP content</title>
</head>
<body>
    <?php

       function validate_weekday($day) {
            if(is_string($day)==1)return 'false';
           
            $options = array(
                'options' => array(
                    'min_range' => 0,
                    'max_range' => 6,
                )
            );
            $validate = filter_var($day,FILTER_VALIDATE_INT,$options );
            return $validate !== false ? 'true' : 'false';
        }

        echo '0 is a valid weekday: ' . validate_weekday(0); // true
        echo '<br>';
        echo '6 is a valid weekday: ' . validate_weekday(6); // true
        echo '<br>';
        echo '100 is a valid weekday: ' . validate_weekday(100); // false
        echo '<br>';
        echo '-12 is a valid weekday: ' . validate_weekday(-12); // false
        echo '<br>';
        echo '4 is a valid weekday: ' . validate_weekday(4); // true
        echo '<br>';
        echo 'null is a valid weekday: ' . validate_weekday(null); // false
        echo '<br>';
        echo 'An empty string is a valid weekday: ' . validate_weekday(''); // false
        echo '<br>';
        echo 'An string is a valid weekday: ' . validate_weekday('5'); // false
        echo '<br>';

        function validate_widthdraw_amount($amount, $balance) {
            $options = array(
                'options' => array(
                    'min_range' => 0,
                    'max_range' => $balance,
                )
            );
            //Validating amount and balance respectively
            $validateAmount = filter_var($amount, FILTER_VALIDATE_INT, $options ) && is_numeric($amount);
            $validateBalance = filter_var($balance,FILTER_VALIDATE_INT) && is_numeric( $balance );
            
            return ($validateAmount && $validateBalance)? 'true' : 'false'; 
        }

        echo 'Able to withdraw 100 from an account of 1000 balance: ' . validate_widthdraw_amount(100, 1000); // true
        echo '<br>';
        echo 'Able to withdraw 1000 from an account of 1000 balance: ' . validate_widthdraw_amount(1000, 1000); // true
        echo '<br>';
        echo 'Able to withdraw -50 from an account of 1000 balance: ' . validate_widthdraw_amount(-50, 1000); // false
        echo '<br>';
        echo 'Able to withdraw 1500 from an account of 1000 balance: ' . validate_widthdraw_amount(1500, 1000); // false
        echo '<br>';
        echo 'Able to withdraw true from an account of true balance: ' . validate_widthdraw_amount(true, true); // false
        echo '<br>';
        echo 'Able to withdraw 0 from an account of negative 100 balance: ' . validate_widthdraw_amount(0, -100); // false
        echo '<br>';
        echo 'Able to withdraw null from an account of 0 balance: ' . validate_widthdraw_amount(null, 0); // false
        echo '<br>';

        function validate_school_email($email_addr) {
            // validating with builtin filter FILTER_VALIDATE_EMAIL and checking if emailaddress end with '@bc.f' string
           
            $validate = filter_var($email_addr,FILTER_VALIDATE_EMAIL) && (substr($email_addr, -6)== '@bc.fi' );
            return $validate? 'true' : 'false';
        }

        echo 'test_student@bc.fi is a valid school email: ' . validate_school_email('test_student@bc.fi'); // true
        echo '<br>';
        echo 'test_student@bc.fi@bc.fi is a valid school email: ' . validate_school_email('test_student@bc.fi@bc.fi'); // false
        echo '<br>';
        echo 'bc.fi@bc.fi is a valid school email: ' . validate_school_email('bc.fi@bc.fi'); // true
        echo '<br>';
        echo 'test_student@gmail.com is a valid school email: ' . validate_school_email('test_student@gmail.fi'); // false
        echo '<br>';
        echo 'test_student#bc.fi is a valid school email: ' . validate_school_email('test_student#bc.fi'); // false
        echo '<br>';
        
    ?>
</body>
</html>
