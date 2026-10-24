document.addEventListener('DOMContentLoaded', () => {
    console.log('Módulo de voluminosos listo.');
});

function aprobarSolicitud(id) {
    alert(`Solicitud #VOL-${id} aprobada y asignada al reciclador de oficio.`);
    location.reload();
}

function finalizarSolicitud(id) {
    alert(`Solicitud #VOL-${id} marcada como recogida. Se otorgaron puntos al residente.`);
    location.reload();
}

document.getElementById('btnNuevaSolicitud')?.addEventListener('click', () => {
    const apto = prompt('Ingrese el número de Torre y Apartamento:');
    const residuo = prompt('Ingrese el tipo de residuo (mueble, escombro, etc.):');
    if (apto && residuo) {
        alert(`Solicitud agendada con éxito para ${apto}.`);
    }
});