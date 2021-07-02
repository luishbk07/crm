import {buscarCliente, actualizarCliente} from './API.js';
import {mostrarAlerta, validar} from './funciones.js';
(() => {
    document.addEventListener('DOMContentLoaded', mostrarCliente);
    const formulario = document.querySelector('#formulario');
    let clienteObj;
    formulario.addEventListener('submit', validarCliente);
    async function mostrarCliente() {
        const nombre = document.querySelector('#nombre');
        const email = document.querySelector('#email');
        const telefono = document.querySelector('#telefono');
        const empresa = document.querySelector('#empresa');
        const id = document.querySelector('#id');
        const urlParams = new URLSearchParams(window.location.search);
        const clienteId = urlParams.get('id');
        const cliente = await buscarCliente(clienteId);
        
        nombre.value = cliente.nombre;
        email.value = cliente.email;
        telefono.value = cliente.telefono;
        empresa.value = cliente.empresa;
        id.value = cliente.id;

        clienteObj = {
            id,
            nombre,
            email,
            telefono,
            empresa
        }
    }

    function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            id: id.value,
            nombre: nombre.value,
            email: email.value,
            telefono: telefono.value,
            empresa: empresa.value
        }
        if (validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');

            return;
        }
        actualizarCliente(cliente);
    }

})();