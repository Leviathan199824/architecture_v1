function eliminarUsuario(id,name) {
    if (confirm(`¿Estás seguro de que deseas eliminar al usuario con ID ${name}?`)) {
        fetch(`http://localhost:3000/compas/users/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) { 
                throw new Error('Error al eliminar usuario');
            }
            location.reload(); // Recargar la página después de eliminar el usuario
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al eliminar el usuario. Por favor, inténtalo de nuevo más tarde.');
        });
    }
}

function capturarID(id){
        document.getElementById("identificador").innerHTML=id; 
}
async function updateId(){
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value;
    const id = document.getElementById('identificador').textContent;
    console.log(name+" "+email+" "+id);
    const obj ={name:name,email:email};
    //document.getElementById("respuesta").innerHTML=name+" "+email+" "+id;
    try{
        const response =  await fetch(`http://localhost:3000/compas/users/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(obj),
        });
        if(response.ok){
            console.log('Registro editado exitosamente');
        }else{
            console.log('Error al editar el registro:',response.status);
        }
    }catch(err){
        console.log('Error al editar el registro',err);
    }
}