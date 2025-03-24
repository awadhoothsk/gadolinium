
import jwt from 'jsonwebtoken';

// const payload : jwt.JwtPayload = {
//   iss: 'https://example.com',
//   sub: 'awadhoothsk'
// };

const secretKey = process.env.SECRET_KEY ;
console.log(secretKey);

// const token = jwt.sign(payload, secretKey,{
//   algorithm: 'HS256'});
// console.log(token);


