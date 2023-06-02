<?php

echo "hello";

$con = pg_connect("host =localhost port=5432 dbname=mydb user=postgres password=postres")
    or die('could not connect: ' . preg_last_error());


//performing my SQL query
$query = 'SELECT version()';
$reult  = pg_query($dbconn,$query) or die('query failed: ' . preg_last_error());


?>