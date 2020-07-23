const jwt = require('jsonwebtoken');
import  { hasToken, updateToken } from '../api/queries/auth';

const verifyAuth = (req, res, next) => {

  // Leer headers
  const token = req.get('token');

  console.log(token);

  jwt.verify(token, 'secret', (err, decoded) => {

    if(err) {

      return res.status(401).json({
        mensaje: 'Error de token',
        err
      })
    } else {
      
      hasToken(decoded.data.id)
        .then(authInfo => {

          let fifteenMinutes = 15*60*1000;

          if (new Date() - authInfo.rows[0].issued_date > fifteenMinutes){

            let token = jwt.sign({ data: decoded.data }, 'secret', { expiresIn: '12h'});
          
            let authInfo = {token: token, issued_date: new Date(), id: decoded.data.id}

            updateToken(authInfo)
              .then(authInfoUpdtae => {
                res.status(200).cookie('token', token, { maxAge: 43200, httpOnly: true }).send();
                next();
              }).catch(err => {err});

          } else {

            next();

          }
        }).catch(err => {err});
    }
  });

}

module.exports = verifyAuth;