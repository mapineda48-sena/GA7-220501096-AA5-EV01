const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simulación simple de una base de datos en memoria
let users = [];

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});


// 1. Crear el endpoint de registro
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        return res.status(400).send('El usuario ya existe');
    }

    // Registrar al usuario
    users.push({ username, password });
    res.status(201).send('Usuario registrado exitosamente');
});

//2. Crear el endpoint de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verificar si el usuario existe y la contraseña es correcta
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).send('Error en la autenticación');
    }

    // Crear el token JWT
    const token = jwt.sign({ username: user.username }, 'secretKey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Autenticación satisfactoria', token });
});
