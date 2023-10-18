document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Realizar una solicitud al servidor para verificar el inicio de sesión
    // Puedes utilizar AJAX, Fetch API o cualquier otro método para enviar los datos al servidor.

    // Supongamos que se utiliza Fetch API para enviar los datos al servidor.
    fetch("../PHP/verificar_login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.authenticated) {
            // Redirigir a la página de éxito si el inicio de sesión es exitoso
            window.location.href = "pagina_exitosa.html";
        } else {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    })
    .catch(error => {
        console.error("Error en la solicitud: " + error);
    });
});


function tomarOrden(mesa) {
    var mesaId = 'mesa' + mesa;
    var mesaElement = document.getElementById(mesaId);
    var ordenModal = document.getElementById('orden-modal');
    var ordenMesa = document.getElementById('orden-mesa');
    
    ordenMesa.innerHTML = 'Tomando orden para ' + mesaId + '<br>';
    ordenMesa.innerHTML += 'Selecciona los platos:<br>';
    ordenMesa.innerHTML += '<label for="plato1">Plato 1</label>';
    ordenMesa.innerHTML += '<input type="checkbox" id="plato1" value="Plato 1"><br>';
    ordenMesa.innerHTML += '<label for="plato2">Plato 2</label>';
    ordenMesa.innerHTML += '<input type="checkbox" id="plato2" value="Plato 2"><br>';
    // Agrega más opciones de comida aquí según sea necesario
    ordenModal.style.display = 'block';
}
