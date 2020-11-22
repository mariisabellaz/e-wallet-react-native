<?php

    header("Access-Control-Allow-Origin: *");

    include("../../Database/dbconnect.php");
    mysql_set_charset('utf8');
    
    $json = file_get_contents('php://input');
    $_POST = json_decode($json, TRUE);

    $name_transaction = $_POST['name_transaction'];
    $value            = $_POST['value'];
    $service          = $_POST['service'];
    $data             = date("Y-m-d H:i:s");
    $type             = $_POST['type'];

    $query= "INSERT INTO transactions (name_transaction, value, service, data, type) VALUES ('$name_transaction', '$value', $service', $data', '$type);";

    $result = mysql_query($query, $conexao);

    $resultCode = "ok";
    $response = array('resultCode' => $resultCode);

    echo json_encode($response);

?>