import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {type:String, required:true, unique: true, dropDups: true },
  age: {type:Number, required:true },
  gender: {type:String, required:true },
  mbti: {type:String, required:true },
  residence: {type:String, required:true },
  height: {type:Number, required:true },
  keyword: {type:Array, required:true },
  idealAge: {type:String, required:true },//20~30
  idealMbti: {type:Array, required:true },
  idealHeight: {type:String, required:true },//140~200
  idealKeyword: {type:Array, required:true },
  idealScore: {type:Object, required:false },//{"남자/여자 아이디" : 점수}(점수는 100점 만점으로 내 기준에 따른 상대방 점수)
  coupleScore: {type:Object, required:false },//key:상대방 아이디, value:점수합/200
  matchingScore: {type:Number, required:false },//선택된 커플의 점수가 들어감, "(점수합/2)" 100점 만점
  matchedId: {type:String, required:false },
  isAdmin: { type: Boolean, required: true, default: false },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;