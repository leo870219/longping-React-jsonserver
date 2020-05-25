<?php
header("Content-Type: application/json; charset=UTF-8");
include("connectMysql.php");
$sql_query="SELECT * FROM products"; 

$result = $db_link ->query($sql_query);

while($row = mysqli_fetch_assoc($result))
    $data[] = $row; 
print json_encode($data);
$db_link->close();
