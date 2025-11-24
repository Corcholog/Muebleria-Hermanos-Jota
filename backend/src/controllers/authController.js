const bcrypt = require('bcrypt')
const userRepository = require('../persistencia/repositories/user.repository')

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