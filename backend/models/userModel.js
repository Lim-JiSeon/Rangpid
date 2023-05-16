import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type:String, required:true, unique: true },//카톡아이디
  password: { type: String, required: true },
  gender: { type: String, required: true },
  character: { type:String, required:true },
  idealCharacter: { type:String, required:true },
  hobby: { type:String, required:true },
  idealScore: { type:Object, required:false },//{"남자/여자 아이디" : 점수}(점수는 100점 만점으로 내 기준에 따른 상대방 점수)
  coupleScore: { type:Object, required:false },//key:상대방 아이디, value:점수합/200
  idealInfo: { type:String, required:false },//매칭된 상대방의 정보가 들어감, "성격: 다정한, 취미:여행"
  matchedId: { type:String, required:false },
  isAdmin: { type: Boolean, required: true, default: false },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;