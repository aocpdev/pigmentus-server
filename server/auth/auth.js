const jwt = require('jsonwebtoken');

const verificarAuth = (req, res, next) => {

  // Leer headers
  const token = req.get('token');

  console.log(token);

  jwt.verify(token, 'secret', (err, decoded) => {

    if(err) {
      return res.status(401).json({
        mensaje: 'Error de token',
        err
      })
    }

    // Creamos una nueva propiedad con la info del usuario
    req.usuario = decoded.data; //data viene al generar el token en login.js
    next();

  });

}

module.exports = verificarAuth;