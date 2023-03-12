import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign(user, config.JWT_SECRET, {
        expiresIn: '48h',
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
    })
}

export {
    getToken
}