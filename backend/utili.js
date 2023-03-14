import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign(
      {
        _id: user.id,
        age: user.age,
        gender: user.gender,
        mbti: user.mbti,
        residence: user.residence,
        height: user.height,
        keyword: user.keyword,
        idealAge: user.idealAge,
        idealMbti: user.idealMbti,
        idealHeight: user.idealHeight,
        idealKeyword: user.idealKeyword,
        idealScore: user.idealScore,
        coupleScore: user.coupleScore,
        matchingScore: user.matchingScore,
        matchedId: user.matchedId,
      },
      config.JWT_SECRET,
      {
        expiresIn: '48h',
      }
    );
};

const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
      const onlyToken = token.slice(7, token.length);
      jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
        if (err) {
          return res.status(401).send({ message: 'Invalid Token' });
        }
        req.user = decode;
        next();
        return;
      });
    } else {
      return res.status(401).send({ message: 'Token is not supplied.' });
    }
};

export { getToken, isAuth };