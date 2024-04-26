const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
    console.log("llega alroute");
    //ruta para mostrar el usuario
    router.get('/users', userController.getAllUsers);
    //ruta para crear el usuario
    router.post('/users', userController.createUser);
    //ruta para eliminar un usario con el id
    router.delete('/users/:id', userController.deleteUserById);
    //ruta para actualizar un registro
    router.put('/users/:id', userController.updateUserById);     
    module.exports = router;
