import '../App.css';
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../data/Hangjungdong";
import { useState } from "react";

function Signin(props) {
    let navigate = useNavigate();
    const { sido, sigugun, dong } = hangjungdong;
    
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    

    function selectSidoText() {
        let sidoSelect = document.getElementById("sido");
        let sidoText = sidoSelect.options[sidoSelect.selectedIndex].text;
        user_information['addr'] = sidoText;
        console.log(user_information['addr']);
    }

    function selectSigugunText() {
        let sigugunSelect = document.getElementById("sigugun");
        let sigugunText = sigugunSelect.options[sigugunSelect.selectedIndex].text;
        user_information['addr'] += sigugunText;
        console.log(user_information['addr']);
    }

    let user_information = {
        id : "",
        age : 0,
        height : 0,
        gender : "male",
        link : "",
        mbti : [],
        addr : "",
        keyword : [],
    };

    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>회원 가입</div>
                <div className='info-input-container'>
                    <div className='detail-title'>정보 입력</div>
                    <div className='id-input-container'>
                        <div className='mini-title'>아이디</div>
                        <input className='id-input'
                            type="text"
                            onChange={(event) => user_information['id'] = event.target.value}></input>
                        <button className='id-check-btn'>중복확인</button>
                    </div>
                    <div className='age-input-container'>
                        <div className='mini-title'>나이</div>
                        <input className='age-input'
                            type="text"
                            onChange={(event) =>user_information['age'] = Number(event.target.value)}></input>
                    </div>
                    <div className='sex-input-container'>
                        <div className='mini-title'>성별</div>
                        <button className='m-sex'
                            onClick={() => {
                                user_information['gender'] = 'male'
                                }}>남성</button>
                        <button className='f-sex'
                            onClick={() => {
                                user_information['gender'] = 'female'
                                }}>여성</button>
                    </div>
                    <div className='link-input-container'>
                        <div className='mini-title'>오픈채팅 링크</div>
                        <input className='link-input'
                            type="text"
                            onChange={(event) => user_information['link'] = event.target.value}></input>
                        <div className='detail-content'>
                            *매칭 후 상대방에게 전달될 오픈채팅방 링크입니다. 카카오톡 오픈채팅 방을 만든 뒤 링크를 작성해주세요. 
                        </div>
                    </div>
                </div>
                <div className='mbti-input-container'>
                    <div className='detail-title'>성격(MBTI)</div>
                    <div className='mbti-btn-container'>
                        <button className='enfj' 
                            onClick={() => {
                                user_information['mbti'] = "ENFJ";
                                }}>ENFJ</button>
                        <button className='infj'
                            onClick={() => {
                                user_information['mbti'] = "INFJ";
                                }}>INFJ</button>
                        <button className='intj'
                            onClick={() => {
                                user_information['mbti'] = "INTJ";
                                }}>INTJ</button>
                        <button className='entj'
                            onClick={() => {
                                user_information['mbti'] = "ENTJ";
                                }}>ENTJ</button>
                        <button className='enfp'
                            onClick={() => {
                                user_information['mbti'] = "ENFP";
                                }}>ENFP</button>
                        <button className='infp'
                            onClick={() => {
                                user_information['mbti'] = "INFP";
                                }}>INFP</button>
                        <button className='intp'
                            onClick={() => {
                                user_information['mbti'] = "INTP";
                                }}>INTP</button>
                        <button className='entp'
                            onClick={() => {
                                user_information['mbti'] = "ENTP";
                                }}>ENTP</button>
                        <button className='esfp'
                            onClick={() => {
                                user_information['mbti'] = "ESFP";
                                }}>ESFP</button>
                        <button className='isfp'
                            onClick={() => {
                                user_information['mbti'] = "ISFP";
                                }}>ISFP</button>
                        <button className='istp'
                            onClick={() => {
                                user_information['mbti'] = "ISTP";
                                }}>ISTP</button>
                        <button className='estp'
                            onClick={() => {
                                user_information['mbti'] = "ESTP";
                                }}>ESTP</button>
                        <button className='esfj'
                            onClick={() => {
                                user_information['mbti'] = "ESFJ";
                                }}>ESFJ</button>
                        <button className='isfj'
                            onClick={() => {
                                user_information['mbti'] = "ISFJ";
                                }}>ISFJ</button>
                        <button className='istj'
                            onClick={() => {
                                user_information['mbti'] = "ISTJ";
                                }}>ISTJ</button>
                        <button className='estj'
                            onClick={() => {
                                user_information['mbti'] = "ESTJ";
                                }}>ESTJ</button>
                    </div>
                </div>
                <div className='addr-input-container'>
                    <div className='detail-title'>거주지</div>
                    <div className="select-container">
                        <div className="select-address">
                            <select id="sido" 
                            onChange={(e) => {
                                setVal1(e.target.value);
                                selectSidoText();
                            }}>
                            <option value="">선택</option>
                            {sido.map((el) => (
                                <option key={el.sido} value={el.sido}>
                                {el.codeNm}
                                </option>
                            ))}
                            </select>
                        </div>

                        <div className="select-address">     
                            <select id="sigugun" 
                            onChange={(e) => {
                                setVal2(e.target.value);
                                selectSigugunText();
                            }}>
                            <option value="">선택</option>
                            {sigugun
                                .filter((el) => el.sido === val1)
                                .map((el) => (
                                <option key={el.sigugun} value={el.sigugun}>
                                    {el.codeNm}
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='keyword-input-container'>
                    <div className='detail-title'>키워드</div>
                    <div className='keyword-content-container'>
                        <div className='mini-title'>키</div>
                            <input className='height-input'
                            type="text"
                            onChange={(event) => user_information['height'] = Number(event.target.value)}></input>
                        <div className='keword-btn-container'>
                            <button className='dog'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "강아지상"];
                                    }}>강아지상</button>
                            <button className='cat'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "고양이상"];
                                    }}>고양이상</button>
                            <button className='rabbit'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "토끼상"];
                                    }}>토끼상</button>
                            <button className='bear'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "곰상"];
                                    }}>곰상</button>
                            <button className='kind'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "다정한"];
                                    }}>다정한</button>
                            <button className='calm'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "차분한"];
                                    }}>차분한</button>
                            <button className='active'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "활발한"];
                                    }}>활발한</button>
                            <button className='cute'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "귀여운"];
                                    }}>귀여운</button>
                            <button className='thin'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "마른"];
                                    }}>마른</button>
                            <button className='muscle'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "근육질"];
                                    }}>근육질</button>
                            <button className='normal'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "보통"];
                                    }}>보통</button>
                            <button className='full'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "통통한"];
                                    }}>통통한</button>
                            <button className='game'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "게임"];
                                    }}>게임</button>
                            <button className='movie'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "영화보기"];
                                    }}>영화보기</button>
                            <button className='trip'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "여행"];
                                    }}>여행</button>
                            <button className='exercise'
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "운동"];
                                    }}>운동</button>
                        </div>
                    </div>
                </div>
                <div className='next-container'>
                    <button className='next-btn'
                        type='submit'
                        onClick={() => {
                        navigate("/signin2");
                        console.log(user_information['addr']);
                        props.getUserData(user_information['id'], user_information['age'], user_information['height'], user_information['gender'], user_information['link'], user_information['mbti'], user_information['addr'], user_information['keyword']);
                        }}
                    >
                        다음
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Signin;