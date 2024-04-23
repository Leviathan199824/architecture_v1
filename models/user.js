const mongoose =require('mongoose');
/*objeto*/
const userSchema = new mongoose.Schema({
    name:String,
    email:String
}); 
// Crear modelo de usuario
const UserModel = mongoose.model('usuarios', userSchema);

module.exports = UserModel;
