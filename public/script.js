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