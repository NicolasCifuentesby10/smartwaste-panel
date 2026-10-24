document.addEventListener('DOMContentLoaded', () => {
    console.log('Módulo de reportes listo.');
});

document.getElementById('btnGenerarReporte')?.addEventListener('click', () => {
    const mes = document.getElementById('mesReporte').value;
    const formato = document.getElementById('tipoFormato').value;

    alert(`Generando y descargando reporte PGIRS de ${mes.toUpperCase()} en formato ${formato.toUpperCase()}...`);
});