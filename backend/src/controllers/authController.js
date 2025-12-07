const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRepository = require('../persistencia/repositories/user.repository')
const User = require('../persistencia/models/user.model');

exports.register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Validacion
    if (!nombre || !phone || !email || !password ) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Verificar si existe
    const existeUser = await userRepository.findByEmail(email);
    if (existeUser) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Crear usuario
    const user = await userRepository.create({
      nombre,
      phone,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: { id: user._id, nombre: user.nombre, phone: user.phone, email: user.email }
    });

  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

exports.login = async(req, res) => {
  try{
    const {email, password} = req.body;

    //Validación
    if(!email || !password){
      return res.status(400).json({error: 'Email y contraseña son obligatorios'})
    }

    //Buscar usuario que coincida con el email
    const user = await User.findOne({ email })
    if(!user) return res.status(401).json({error: 'Credenciales inválidas'})

    //Verificar password
    const match = await bcrypt.compare(password, user.password)
    if(!match) return res.status(401).json({error: 'Credenciales inválidas'})

    //Generar JWT
    const token = jwt.sign({userId: user._id, email: user.email, rol: user.rol}, process.env.JWT_SECRET, {expiresIn: '1h'})

    res.json({message: 'Login exitoso', token})
  } catch (error){
    res.status(500).json({error: 'Error al iniciar sesión'})
  }
}