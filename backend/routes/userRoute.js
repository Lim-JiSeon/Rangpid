import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth } from '../utili';

const router = express.Router();

//로그인
router.post('/signin',async (req, res)=>{
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
            isAdmin: updatedUser.isAdmin,
            token: getToken(signinUser),
        })
    }else {
        res.status(401).send({ message: 'Invalid username.'});
    }
});

//회원가입
router.post('/signup', async (req, res)=>{
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
            isAdmin: updatedUser.isAdmin,
            token: getToken(newUser),
        });
    }else {
        res.status(401).send({ message: 'Invalid User Data'});
    }
});

//사용자 정보 조회(url에 카톡아이디 포함)
router.get('/edit/:id', async(req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.send({
        user,
    });
});

//정보수정-새로운 정보 업데이트
router.put('/edit/:id', isAuth, async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.username = req.body.username || user.username;
      user.age = req.body.age || user.age;
      user.gender = req.body.gender || user.gender;
      user.mbti = req.body.mbti || user.mbti;
      user.residence = req.body.residence || user.residence;
      user.height = req.body.height || user.height;
      user.keyword = req.body.keyword || user.keyword;
      user.idealAge = req.body.idealAge || user.idealAge;
      user.idealMbti = req.body.idealMbti || user.idealMbti;
      user.idealHeight = req.body.idealHeight || user.idealHeight;
      user.idealKeyword = req.body.idealKeyword || user.idealKeyword;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        age: updatedUser.age,
        gender: updatedUser.gender,
        mbti: updatedUser.mbti,
        residence: updatedUser.residence,
        height: updatedUser.height,
        keyword: updatedUser.keyword,
        idealAge: updatedUser.idealAge,
        idealMbti: updatedUser.idealMbti,
        idealHeight: updatedUser.idealHeight,
        idealKeyword: updatedUser.idealKeyword,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
});

//sample data
router.get("/createadmin", async (req, res)=>{
    try {
        const user = new User({
            username: 'softbear15',
            age: '22',
            gender: '여성',
            mbti: 'istj',
            residence: '경기도 용인시',
            height: '163',   
            keyword: ['토끼상','차분한', '운동'],
            idealAge: '21~25',
            idealMbti: ['esfp'],
            idealHeight: '175~188',
            idealKeyword: ['마른','근육질'],
            idealScore: {"Minsu":75,"Minjun":60 },
            coupleScore: {"Minsu":150 },
            matchingScore: '75',
            matchedId: 'gang',
            isAdmin: true,
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch(error) {
    res.send({ message: error.message });
   }
})

export default router;