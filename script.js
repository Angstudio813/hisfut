// Función que maneja el evento de clic en el botón "Registrarse"
function validarFormulario(event) {
    // Evitar que el formulario se envíe si no se pasa la validación
    event.preventDefault(); 
    
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombreId').value;
    const apellido = document.getElementById('ApellidoId').value;
    const correo = document.getElementById('emailId').value;
    const telefono = document.getElementById('NumeroId').value;
    const contraseña = document.getElementById('PasswordId').value;

    // Validación simple para verificar si los campos están completos
    if (nombre && apellido && correo && telefono && contraseña) {
        // Si todos los campos están completos, mostrar un alert
        alert('Formulario enviado correctamente');
        // Aquí puedes agregar más lógica para enviar el formulario o realizar otras acciones
        // Por ejemplo, si todo es correcto, se puede enviar el formulario
        document.getElementById('registrateForm').submit(); // Envía el formulario
    } else {
        // Si algún campo está vacío, mostrar un alert
        alert('Por favor, completa todos los campos');
    }
}

