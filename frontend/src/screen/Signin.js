import '../App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';

function Signin() {
    let navigate = useNavigate();
    const [id, setId] = useState("");
    
    const onClickLogin = () => {
        axios.post("http://localhost:5000/api/users/signin",{
            username: id
        })
        .then((res) => {
            if (res.data.id == id) {
                console.log("로그인 성공");
                sessionStorage.setItem('id', id)
                alert("로그인을 성공했습니다.")
            } else if (res.data.id == null) {
                console.log("로그인 실패 : 아이디 미입력");
                alert("아이디를 입력해주세요.")
            } else {
                console.log("로그인 실패 : 아이디 불일치");
                alert("아이디가 일치하지 않습니다.")
            }
        })
        .catch()
    };

    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>로그인</div>
                <div>
                    
                </div>
                <div className='login-input-container'>
                    <input className='login-input'
                        type='text'
                        id='login-input-txt'
                        placeholder='아이디를 입력해주세요.'
                        onChange={(e) => setId(e.target.value)}
                    ></input>
                </div>
                <div className='log-in-container'>
                    <button className='log-in-btn'
                        type='submit'
                        onClick={() => {
                            onClickLogin();
                            navigate("/select");
                        }}
                    >
                        로그인하기
                    </button>
                </div>
            </div>
        </div>
        <footer>
            랑피드
        </footer>
        </div>
    );
}

export default Signin;