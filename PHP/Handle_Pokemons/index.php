<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    
    $data = file_get_contents("data.json");
    $parsed_data = json_decode($data, true);
   
    $parsed_data['next'] = 2;
    $parsed_data['previous'] = 0;
    $next = $parsed_data['next'];
    $previous = $parsed_data['previous'];
    $pokemonsArray = $parsed_data['results'];

   $numberOfPokemons = count($pokemonsArray);
    echo("<div>
         <h1> Number of Pokomens displayed: $numberOfPokemons</h1> 
        </div>"
    );  

    // getting page number from Request ; default page number is 1
    $page = 1;
    if($_GET['page']) $page = $_GET['page'];
    echo 'Page number: ' . $page;

  
    $chunkPokemon = array_chunk($pokemonsArray, 50, true); 
    $chunkPokemonToPrint = array_slice( $chunkPokemon, $page, $page+1);
   
   // looping through chunkPokemon array

   foreach($chunkPokemonToPrint[0] as $key => $value ){
        echo '<br>';
        print_r($key. '. ' . $value['name']. ': '.$value['url']);
    };


    // echo "<a href='/index.php?page=$next'>Next</a>";
    // echo 'page'.$_REQUEST['page'];

   
    ?>
</body>
</html>