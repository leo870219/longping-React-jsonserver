<?php
header("Content-Type: application/json; charset=UTF-8");
include("connectMysql.php");


switch ($method) {
    case 'GET':
        $sql_query = "SELECT * FROM products";

        $result = $db_link->query($sql_query);

        while ($row = mysqli_fetch_assoc($result))
            $data[] = $row;
        print json_encode($data);
        $db_link->close();
        break;
    case 'POST':
        $json = json_decode(file_get_contents('php://input'), true);
        $sql_query = "INSERT INTO products(name, image,mainmeal,sidedishes,price,status) VALUES('$json[name]', '$json[image]','$json[mainmeal]','$json[sidedishes]','$json[price]','$json[status]')";
        $query_result = $db_link->query($sql_query);

        if ($query_result === true) {
            $message = 'Success!';
        } else {
            $message = 'Error! Try Again(' . $db_link->error . ')';
        }

        echo json_encode($message);

        $db_link->close();
        break;
    case 'PUT':
        $json = json_decode(file_get_contents('php://input'), true);
        $sql_query = "UPDATE products SET name='$json[name]',image='$json[image]',mainmeal='$json[mainmeal]',sidedishes='$json[sidedishes]',price='$json[price]',status='$json[status]' WHERE id=$json[id]";
        $query_result = $db_link->query($sql_query);
        if ($query_result === true) {
            $message = 'Success!';
        } else {
            $message = 'Error! Try Again(' . $db_link->error . ')';
        }

        echo json_encode($message);

        $db_link->close();
        break;
    case 'DELETE':

        $json = json_decode(file_get_contents('php://input'), true);
        $sql_query = "DELETE FROM products WHERE id=$json[id]";
        $query_result = $db_link->query($sql_query);
        print_r($json);
        if ($query_result === true) {
            $message = 'Success!';
        } else {
            $message = 'Error! Try Again(' . $db_link->error . ')';
        }

        echo json_encode($message);

        $db_link->close();
        break;
}
