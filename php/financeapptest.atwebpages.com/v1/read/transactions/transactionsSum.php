<?php

    header("Content-Type: text/html; charset=UTF-8", true);

    include("../../Database/dbconnect.php");
    mysql_set_charset('utf8');

    $query= "SELECT SUM(value) AS value_sum FROM transactions;";

    $result = mysql_query($query, $conexao);

    $row = mysql_fetch_assoc($result); 

    $sum = $row['value_sum'];
    
    
    $apidata [] = array('total' => $sum );
    
    
    echo json_encode($apidata);

?>
