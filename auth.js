document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    // Definimos las credenciales exclusivas para el Administrador
    const ADMIN_EMAIL = "admin@smartwaste.com";
    const ADMIN_PASS = "Smartwaste2026*";

    if (role === 'admin') {
        // Validamos si el usuario intenta entrar como admin pero puso datos incorrectos
        if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
            localStorage.setItem('userRole', role);
            localStorage.setItem('userEmail', email);
            window.location.href = 'dashboard.html';
        } else {
            alert("❌ Credenciales de Administrador incorrectas. Usa el correo y contraseña autorizados.");
        }
    } else {
        // Si el rol es reciclador u otro, ingresa libremente con cualquier correo
        if (email !== "") {
            localStorage.setItem('userRole', role);
            localStorage.setItem('userEmail', email);
            window.location.href = 'dashboard.html';
        } else {
            alert("Por favor ingresa un correo válido.");
        }
    }
});