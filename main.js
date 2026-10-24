// Validar que exista usuario activo
const userRole = localStorage.getItem('userRole');

if (!userRole && !window.location.pathname.endsWith('index.html')) {
    window.location.href = 'index.html';
}

// Botón de Cerrar Sesión
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    localStorage.clear();
    window.location.href = 'index.html';
});