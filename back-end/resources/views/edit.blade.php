<?php
require '../connection.php';

if (!isset($_GET['id'])) {
    header("Location: index.php");
}

$sql = "SELECT p.*, pt.Name as ProductType FROM products p INNER JOIN producttypes pt ON p.ProductTypeId = pt.Id WHERE p.Id=:Id";
$params = ["Id" => $_GET['id']];
$result = ExecuteSelectQuery($sql, $params);
if (count($result) == 0) {
    header("Location: index.php");
} else {
    $product = $result[0];
}

$sql = "SELECT * FROM producttypes";
$productTypes = ExecuteSelectQuery($sql);

if (isset($_POST['SKU'])) {
    $sql = "UPDATE products
            SET SKU=:SKU, Name=:Name, Description=:Description, Price=:Price, Stock=:Stock, ProductTypeId=:ProductTypeId, Image='', Status=:Status
            WHERE Id=:Id";
    $params = [...$_POST, "Status" => isset($_POST['Status']) ? 1 : 0, "Id" => $_GET['id']];
    $result = ExecuteNonQuery($sql, $params);
    if ($result->rowCount() == 1) {
        header("Location: index.php");
    }
}
?>