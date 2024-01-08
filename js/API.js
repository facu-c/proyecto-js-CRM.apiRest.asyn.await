const url = 'http://localhost:4000/clientes';


//cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(cliente),
            //informacion de que tipo de datos estamos enviando
            headers: {
                'Content-type': 'application/json',
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
};

//obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url); //por default fetch manda un get
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//eliminar cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
    } catch (error) {
        console.log(error);
    }
}

//obtiene un cliente por su id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return(cliente);
    } catch (error) {
        console.log(error);
    }
}

//actualiza un registro
export const  editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`,{
            method:'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json',
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}