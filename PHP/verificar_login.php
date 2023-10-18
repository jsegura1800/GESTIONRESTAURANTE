<?php
// Establece la conexión a la base de datos
$servername = "localhost";
$username = "mysql.infoschema";
$password = "12345678";
$dbname = "perritoPanzon"; // Nombre de la base de datos

// Recibe datos del formulario
$data = json_decode(file_get_contents("php://input"));
$username = $data->username;
$password = $data->password;

// Crea la conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión a la base de datos
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Previene la inyección de SQL
$username = $conn->real_escape_string($username);
$password = $conn->real_escape_string($password);

// Realiza la consulta para verificar el inicio de sesión
$query = "SELECT * FROM users WHERE nameUser = '$username' AND passUser = '$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $response = array("authenticated" => true);
} else {
    $response = array("authenticated" => false);
}

echo json_encode($response);

$conn->close();
?>