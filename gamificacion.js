document.addEventListener('DOMContentLoaded', () => {
    console.log('Módulo de gamificación listo.');
});

function canjear(puntos) {
    const residente = prompt('Ingrese la Torre y Apartamento del residente:');
    if (residente) {
        alert(`Se han descontado ${puntos} puntos ecológicos al apto ${residente} y se ha aplicado el beneficio.`);
    }
}

document.getElementById('btnNuevoBeneficio')?.addEventListener('click', () => {
    const titulo = prompt('Título del nuevo beneficio:');
    const puntos = prompt('Costo en puntos ecológicos:');
    if (titulo && puntos) {
        alert(`Beneficio "${titulo}" creado con éxito por ${puntos} puntos.`);
    }
});