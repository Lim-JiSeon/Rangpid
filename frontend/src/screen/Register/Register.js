import style from "./Register.module.css";
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../../data/Hangjungdong";
import { useEffect, useState } from "react";
import axios from 'axios';

function Register() {
    let navigate = useNavigate();

    let [input, setInput] = useState({
        id: '',
        password: '',
        gender: '',
        character: '',
        idealCharacter: '',
        hobby: ''
    });

    const {id, password, gender, character, idealCharacter, hobby} = input;

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]:value
        })
    };

    const register = () => {
        axios.post("http://localhost:5000/api/users/signup",input,
        {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
            console.log("회원가입 성공", res.data);
        })
        .catch((err) => {
            console.log(input);
            console.log(err);
        });    
    };

    
    return (
        <div className={style.wrap}>
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.subTitle}>회원 가입</div>
            </div>
            <div id={style.containerContents}>
                <div className={style.infoInputContainer}>
                    <div className={style.idInputContainer}>
                        <div className={style.miniTitle}>카톡 아이디</div>
                        <input className={style.idInput}
                            type="text"
                            name="id"
                            onChange={onChangeInput}
                        ></input>
                    </div>
                    <div className={style.idInputContainer}>
                        <div className={style.miniTitle}>비밀 번호</div>
                        <input className={style.idInput}
                            type="password"
                            name="password"
                            onChange={onChangeInput}
                        ></input>
                    </div>
                    <div className={style.idInputContainer}>
                        <div className={style.miniTitle}>비밀 번호 확인</div>
                        <input className={style.idInput}
                            type="password"
                            name="password"
                            onChange={onChangeInput}
                        ></input>
                    </div>    
                </div>
                <div className={style.idInputContainer}>
                    <div className={style.miniTitle}>성별</div>
                    <select className={style.idInput}
                        name="gender"
                        onChange={onChangeInput}
                    >
                        <option>선택</option>
                        <option>여성</option>
                        <option>남성</option>
                    </select>
                </div>
                <div className={style.idInputContainer}>
                    <div className={style.miniTitle}>성격</div>
                    <select className={style.idInput}
                        name="character"
                        onChange={onChangeInput}
                    >
                        <option>선택</option>
                        <option>다정한</option>
                        <option>차분한</option>
                        <option>활발한</option>
                        <option>귀여운</option>
                        <option>조용한</option>
                        <option>지적인</option>
                        <option>장난기 많은</option>
                    </select>
                </div>
                <div className={style.idInputContainer}>
                    <div className={style.miniTitle}>이상형 성격</div>
                        <select className={style.idInput}
                            name="idealCharacter"
                            onChange={onChangeInput}
                        >
                            <option>선택</option>
                            <option>다정한</option>
                            <option>차분한</option>
                            <option>활발한</option>
                            <option>귀여운</option>
                            <option>조용한</option>
                            <option>지적인</option>
                            <option>장난기 많은</option>
                        </select>
                </div>
                <div className={style.idInputContainer}>
                    <div className={style.miniTitle}>관심사</div>
                        <select className={style.idInput}
                            name="hobby"
                            onChange={onChangeInput}
                        >
                            <option>선택</option>
                            <option>게임</option>
                            <option>영화</option>
                            <option>운동</option>
                            <option>여행</option>
                            <option>독서</option>
                            <option>요리</option>
                            <option>유튜브</option>
                        </select>
                </div>   
            </div>

            
            <div className={style.registerContainer}>
                    <button className={style.registerBtn}
                        type='submit'
                        onClick={() => {
                            register();
                            navigate("/select");
                        }}
                    >
                        회원 가입하기
                    </button>
            </div>
        </div>
        <footer>
            랑피드
        </footer>
        </div>
    );
}

export default Register;