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
    
    // getting json data and parsed it
    $data = file_get_contents("data.json");
    $parsed_data = json_decode($data, true);
    
    $pokemonsArray = $parsed_data['results'];

   $numberOfPokemons = count($pokemonsArray);
    
   echo("<div>
            <h1> Number of Pokomens displayed: $numberOfPokemons</h1> 
        </div>"
    );  

    // getting page number from Request ; default page number is 3
    $page = 3;
   
    if($_GET['page']) $page = $_GET['page'];
    
    echo 'Page number: ' . $page . '<br>' ;
    echo 'url = baaseUrl/?page=' . $page . '<br>' ;

    // splitting array into chunks

    $chunkPokemon = array_chunk($pokemonsArray, 50, true); 
    $chunkPokemonToPrint = array_slice( $chunkPokemon, $page, $page+1);
   
   // looping through chunkPokemon array

   foreach($chunkPokemonToPrint[0] as $key => $value ){
        echo '<br>';
        print_r($key. '. ' . $value['name']. ': '.$value['url']);
    };
   
    ?>
</body>
</html>