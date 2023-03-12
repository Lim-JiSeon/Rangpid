import express from 'express';
import User from '../models/userModel';
import { getToken } from '../utili';

const router = express.Router();

router.post('/login',async (req,res)=>{
    const signinUser = await User.findOne({
        username: req.body.username
    });
    if(signinUser){
        res.send({ 
            _id: signinUser.id,
            age: signinUser.age,
            gender: signinUser.gender,
            mbti: signinUser.mbti,
            residence: signinUser.residence,
            height: signinUser.height,
            keyword: signinUser.keyword,
            idealAge: signinUser.idealAge,
            idealMbti: signinUser.idealMbti,
            idealHeight: signinUser.idealHeight,
            idealKeyword: signinUser.idealKeyword,
            idealScore: signinUser.idealScore,
            coupleScore: signinUser.coupleScore,
            matchingScore: signinUser.matchingScore,
            matchedId: signinUser.matchedId,
            token: getToken(signinUser)
        })
    }else {
        res.status(401).send({msg: 'Invalid username.'});
    }
});

router.post('/signup2', async (req,res)=>{
    const user = new User({
        username: req.body.username,
        age: req.body.age,
        gender: req.body.gender,
        mbti: req.body.mbti,
        residence: req.body.residence,
        height: req.body.height,
        keyword: req.body.keyword,
        idealAge: req.body.idealAge,
        idealMbti: req.body.idealMbti,
        idealHeight: req.body.idealHeight,
        idealKeyword: req.body.idealKeyword,
        idealScore: req.body.idealScore,
        coupleScore: req.body.coupleScore,
        matchingScore: req.body.matchingScore,
        matchedId: req.body.matchedId
    });
    const newUser = await user.save();
    if(newUser) {
         res.send({
            _id: newUser.id,
            age: newUser.age,
            gender: newUser.gender,
            mbti: newUser.mbti,
            residence: newUser.residence,
            height: newUser.height,
            keyword: newUser.keyword,
            idealAge: newUser.idealAge,  
            idealMbti: newUser.idealMbti,
            idealHeight: newUser.idealHeight,
            idealKeyword: newUser.idealKeyword,
            idealScore: newUser.idealScore,
            coupleScore: newUser.coupleScore,
            matchingScore: newUser.matchingScore,
            matchedId: newUser.matchedId,
            token: getToken(newUser),
        });
    }else {
        res.status(401).send({message: 'Invalid User Data'});
    }
});

router.get("/createadmin", async (req,res)=>{
    try {
        const user = new User({
            username: 'yewon',
            age: '22',
            gender: '여성',
            mbti: 'istj',
            residence: '경기도 용인시',
            height: '163',   
            keyword: ['토끼상','곰상'],
            idealAge: '21~25',
            idealMbti: ['esfp'],
            idealHeight: '175~188',
            idealKeyword: ['마른','근육질'],
            idealScore: {"Minsu":75,"Minjun":60 },
            coupleScore: {"Minsu":150 },
            matchingScore: '75',
            matchedId: 'gang',
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch(error) {
    res.send({msg: error.message });
   }
})

export default router;