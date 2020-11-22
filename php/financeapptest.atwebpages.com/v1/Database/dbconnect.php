<?PHP

    $host = 'fdb13.awardspace.net';
    $banco = '2153977_bancodeocre';
    $user = '2153977_bancodeocre';
    $pass = 'r-}oD#)f1%{P(+8J';
    $conexao = mysql_connect($host, $user, $pass) or die (mysql_error());
    mysql_select_db($banco) or die (mysql_error());

?>