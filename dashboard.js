document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard de Smartwaste cargado correctamente.');
    
    // Aquí puedes simular la actualización de datos o conexión con la app móvil
    const role = localStorage.getItem('userRole');
    const badge = document.getElementById('userRoleBadge');
    
    if (badge && role) {
        badge.textContent = role === 'admin' ? 'Administrador PGIRS' : 'Reciclador de Oficio';
    }
});