const UserModel = require('../models/user');
const path = require('path');
//mostrar los usuarios
exports.getAllUsers = async(req,res)=>{
    console.log("llego fase 2");
    try{
        console.log("entra al modulo getAllUsers");
        const users = await UserModel.find();
        res.render('user', {users});        
        //res.json(users);
    } catch(err){
        console.error("error al obtener usuarios",err);
        res.status(500).send("Error al obtener usuarios");
    }
};  
//crear un nuevo usuario
exports.createUser = async(req,res)=>{
    const {name,email} =req.body;
    try{
        //console.log("+6666");
        const newUser =  new UserModel({name, email});
        //console.log(newUser.name+" "+newUser.email);
        await newUser.save();
        res.redirect('/compas/users');
    }catch(err){
        console.error('Error al crear usuario:', err);
        res.status(500).send('Error al crear usuario.');
    }
};  

//eliminando usuario
exports.deleteUserById = async (req,res)=>{
    //console.log("entro al modulo para eliminar");
    const id = req.params.id;
    try{
        await UserModel.findByIdAndDelete(id);
        //console.log("eliminado con exito");
        res.sendStatus(200);
    }catch(err){
        //console.error('Error al eliminar usuario:', err);
        res.status(500).send('Error al eliminar usuario.');
    }
};

//editar usuario 
exports.updateUserById = async (req,res)=>{
    console.log("entro al modulo de actualizacion")
    const Id = req.params.id;
    //console.log(id+"------");
    const nombre = req.body.name;
    const correo = req.body.email;
    console.log(nombre+"----"+correo);
    const newData = {name:nombre,email:correo};
    try{
        const update = await UserModel.findOneAndUpdate({_id:Id}, newData,{new:true});
        if(!update){
            return res.status(404).send('Usuario no encontrado');
        }
        res.status(200).send('exito');
    }catch(err){
        console.log("Error: " + err);
    }
};