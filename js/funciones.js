export function mostrarAlerta(msg) {
    const existeAlerta = document.querySelector('.alerta');
    if (!existeAlerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'border-red-400', 'text-red-700', 'bg-red-100', 'alerta', 'error');

        alerta.innerHTML = `
        <strong class="font-bold">Error!!</strong>
        <span class="block">${msg}</span>
    `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validar(obj) {
    return !Object.values(obj).every(input => input !== '');
}