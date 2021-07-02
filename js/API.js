const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado;        
    } catch (error) {
     console.log(error);
    }
    
}

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const buscarCliente = async id => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

export const actualizarCliente = async (cliente) => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}