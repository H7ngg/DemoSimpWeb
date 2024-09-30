<?php
require "../connection.php";

$sql = "SELECT * FROM Scientist";
$productTypes = ExecuteSelectQuery($sql);

if (isset($_POST["ID"])) {
    $sql = "INSERT INTO scientists (Name,Birth_place,nationality,date_of_birth,date_of_death, Image, biography,quote)
            VALUES ( :Name, :Birth_place, :Nationality, :date_of_death, :biogrophy, '', :Status)";
    $params = [...$_POST, "" => isset($_POST['']) ? 1 : 0];
    $result = ExecuteNonQuery($sql, $params);
    if ($result->rowCount() == 1) {
        header("Location: index.php");
    }
}
?>