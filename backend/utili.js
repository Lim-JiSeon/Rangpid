import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign(user, config.JWT_SECRET, {
        expiresIn: '48h',
        _id: user.id,
        age: user.age,
        gender: user.gender,
        link: user.link,
        mbti: user.mbti,
        residence: user.residence,
        height: user.height,
        keyword: user.keyword,
        idealAge: user.idealAge,
        idealMbti: user.idealMbti,
        idealResidence: user.idealResidence,
        idealHeight: user.idealHeight,
        idealKeyword: user.idealKeyword,
        idealScore: user.idealScore,
        coupleScore: user.coupleScore,
        matchingScore: user.matchingScore,
        matchedLink: user.matchedLink,
    })
}

export {
    getToken
}