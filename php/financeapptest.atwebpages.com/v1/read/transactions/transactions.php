<?php

    header("Content-Type: text/html; charset=UTF-8", true);

    include("../../Database/dbconnect.php");

    mysql_set_charset('utf8');

    $apidata = array();

    $query=mysql_query("SELECT id, transaction_name, value, service, data, type  FROM transactions");
        
        while($list=mysql_fetch_array($query)){
            $id                    =  $list["id"];
            $transaction_name      =  $list["transaction_name"];
            $value                 =  $list["value"];
            $service               =  $list["service"];
            $data                  =  $list["data"];
            $type                  =  $list["type"];

            $apidata [] = array(
                        'id'                   => $id,
                        'transaction_name'     => $transaction_name,
                        'value'                => $value,
                        'service'              => $service,
                        'data'                 => $data,
                        'type'                 => $type
            );

        }

        if(!empty($apidata)){
            
            echo json_encode($apidata);

        }else {

            $resultCode = "NO";
            $response = array('resultCode' => $resultCode);
            echo json_encode($response);
        }

?>