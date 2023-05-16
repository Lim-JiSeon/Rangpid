import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import styled from "styled-components";
import Footer from './Footer';

const Style = {
    FullLayer: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    `,
    TitleWrap:styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding-top: 2%;
    `,
    Title: styled.div`
        background-color: var(--main-background-color);
        width: 600px;
        height: 142px;
        text-align: center;
        line-height: 142px;
        font-size: var(--title-font-size);
        font-weight: bolder;
        border-radius: 20px;
    `,
    InputWrap: styled.div`
        width: 80%;
        padding: 10%;
        display: flex;
        justify-content: space-around;
        align-content: center;
    `,
    Input: styled.input`
        width: 500px;
        height: 100px;
        border: none;
        background-color: var(--content-background-color);
        border-radius: 30px;
        color: var(--main-txt-color);
        font-size: var(--semi-btn-font-size);
        text-align: center;
        ::placeholder {
            text-align: center;
            font-size: var(--semi-title-font-size);
            color: var(--hint-txt-color); 
        }
    `,
    ButtonWrap: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
    `,
    LoginBtn: styled.button`
        width: 277px;
        height: 91px;
        background-color: var(--main-background-color);
        border: 3px solid var(--main-txt-color);
        border-radius: 20px;
        font-size: var(--semi-btn-font-size);
        color: var(--main-txt-color);
        font-weight: bold;
        &:focus, &:hover {
            background-color: #E5D3FE;
        }
    `,
};

const Signin = () => {
    let navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    
    const login = () => {
        console.log(id, password);
        axios.post("http://localhost:5000/api/users/signin",{
            id: id,
            password: password
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.username === id) {
                console.log("로그인 성공");
                alert("로그인을 성공했습니다.");
            } else if (id == "" || password == "") {
                console.log("로그인 실패 : 아이디 또는 비밀번호 미입력");
                alert("아이디, 비밀번호를 모두 입력해주세요.");
            } else if (res.data.username == "invalid") {
                console.log("로그인 실패 : 아이디 불일치");
                alert("아이디가 일치하지 않습니다.");
            } else if (res.data.password == "incorrect") {
                console.log("로그인 실패 : 비밀번호 불일치");
                alert("비밀번호가 일치하지 않습니다.");
            } else {
                console.log("로그인 실패");
                alert("다시 로그인해주세요.");
            }
        })
        .catch((err) => {
            console.error();
            console.log(err);
        })
    };

    return (
        <>
            <Style.FullLayer>
                <Style.TitleWrap>
                    <Style.Title>로그인</Style.Title>
                </Style.TitleWrap>
                <Style.InputWrap>
                    <Style.Input
                        type='text'
                        placeholder='아이디를 입력해주세요.'
                        onChange={(e) => setId(e.target.value)}
                    ></Style.Input>
                    <Style.Input
                        type='password'
                        placeholder='비밀번호를 입력해주세요.'
                        onChange={(e) => setPassword(e.target.value)}
                    ></Style.Input>
                </Style.InputWrap>
                <Style.ButtonWrap>
                    <Style.LoginBtn
                        type='submit'
                        onClick={() => {
                            login();
                            navigate("/select");
                        }}
                    >
                        로그인하기
                    </Style.LoginBtn>
                </Style.ButtonWrap>
            </Style.FullLayer>
            <Footer></Footer>
        </>
    );
};

export default Signin;