import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth } from '../utili';

const router = express.Router();

//로그인
router.post('/signin', async (req, res)=>{
    const signinUser = await User.findOne({
        username: req.body.id,//카톡아이디
        password: req.body.password,
    });
    if(signinUser){ //아이디와 패스워드 모두 일치할 경우
        res.send({ 
            _id: signinUser.id,
            username: signinUser.username,//카톡아이디
            gender: signinUser.gender,
            character: signinUser.character,
            idealCharacter: signinUser.idealCharacter,
            hobby: signinUser.hobby, 
            idealScore: signinUser.idealScore,
            coupleScore: signinUser.coupleScore,
            idealInfo: signinUser.idealInfo,
            matchedId: signinUser.matchedId,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser),
        });
    }else {
        const signinUser = await User.findOne({ username: req.body.id });
        //아이디는 맞는데 비밀번호가 틀릴 경우
        if(signinUser){ 
            res.send({ password: 'incorrect' }); 
        }
        //아이디가 존재하지 않을 경우
        else{ 
            res.send({ username: 'invalid' }); 
        }
    }
});

//회원가입
router.post('/signup', async (req, res)=> {
    const user = new User({
        username: req.body.id,
        password: req.body.password,
        gender: req.body.gender,
        character: req.body.character,
        idealCharacter: req.body.idealCharacter,
        hobby: req.body.hobby,
    });
    try{
        console.log("user = ");
        console.log(user);
        const newUser = await user.save();
        console.log("newUser = ");
        console.log(newUser);
        if (newUser) {
            res.send({
                _id: newUser.id,
                username: newUser.username,
                gender: newUser.gender,
                character: newUser.character,
                idealCharacter: newUser.idealCharacter,
                hobby: newUser.hobby,
                isAdmin: newUser.isAdmin,
                token: getToken(newUser),
            });
        }else {
            res.status(401).send({ message: 'Invalid User Data' });
    }} catch (error) {
        res.status(400).send({ message: error.message });
    }
});

//정보수정-사용자 정보 조회
router.get('/info/:id', async (req, res) => {
    const userId = req.params.id;//데이터베이스 아이디
    try {
        const user = await User.findById(userId);
        res.send({
            _id: user.id,
            username: user.username,
            gender: user.gender,
            character: user.character,
            idealCharacter: user.idealCharacter,
            hobby: user.hobby,
            idealInfo: user.idealInfo,
            matchedId: user.matchedId,
            isAdmin: user.isAdmin,
            token: getToken(user),
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

//정보수정-새로운 정보 업데이트
router.put('/edit/:id', isAuth, async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.username = req.body.id || user.username;
      user.password = req.body.password || user.password;
      user.gender = req.body.gender || user.gender;
      user.character = req.body.character || user.character;
      user.idealCharacter = req.body.idealCharacter || user.idealCharacter;
      user.hobby = req.body.hobby || user.hobby;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        username: updatedUser.username,
        gender: updatedUser.gender,
        character: updatedUser.character,
        idealCharacter: updatedUser.idealCharacter,
        hobby: updatedUser.hobby,
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
            username: 'coder',
            password: 'focdnoe76',
            gender: '여성',
            character: '다정한',
            idealCharacter: '차분한',
            hobby: '여행',
            idealScore: {"Minsu":75,"Minjun":60 },
            coupleScore: {"Minsu":150 },
            idealInfo: 'Minsu-성격:다정한, 취미:게임',
            matchedId: 'Minsu',
            isAdmin: true,
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch(error) {
    res.send({ message: error.message });
   }
})

export default router;