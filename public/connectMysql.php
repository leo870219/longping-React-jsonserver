<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');

$db_host = "us-cdbr-east-05.cleardb.net";
$db_username = "b2bdf39ee7a7c4";
$db_password = "550f3665";
$db_name = "heroku_0becba99ffc63e8";
$method = $_SERVER['REQUEST_METHOD'];
$db_link = @new mysqli($db_host, $db_username, $db_password, $db_name);
if ($db_link->connect_error != "") {
  echo "資料庫連結失敗";
} else {
  $db_link->query("SET NAMES utf8");
}

 