<?php
header('Content-Type: text/html; charset=utf-8');

/*print_r($_POST);
error_reporting(E_ALL);
ini_set('display_errors', 1);*/

$bdIp = 'localhost';
$dbLogin = 'annase7m_reg';
$dbPass = '12345Anna';
$bdName = 'annase7m_reg';

$dbConnection = mysqli_connect($bdIp, $dbLogin, $dbPass, $bdName);
if (!$dbConnection)
    die('Error');


if (isset($_POST['name'])) {
    $name  = $_POST['name'];
    $email = $_POST['email'];

    // Выполняем запрос для подсчета количества записей
    $result = mysqli_query($dbConnection, "SELECT COUNT(*) as total FROM register");
    $row = mysqli_fetch_assoc($result);
    $userCount = $row['total'];
    $userCount += 1;
    // Вставляем новую запись в таблицу
    $sql = "INSERT INTO `register` (`name`, `email`) VALUES ('$name', '$email')";

    if ($dbConnection->query($sql) === TRUE) {
        echo "Вы $userCount-й, кто подписался на наши обновления!";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $dbConnection->error;
    }
}
?>

