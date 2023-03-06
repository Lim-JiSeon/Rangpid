import style from "./Signup.module.css";
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../../data/Hangjungdong";
import { useState } from "react";
import axios from 'axios';

function Signup(props) {
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


    axios.get('https://localhost:5000')
        .then(response => console.log(response.data))
        .catch(error => console.error(error));

    return (
        <div className={style.wrap}>
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.subTitle}>회원 가입</div>
            </div>
            <div id={style.containerContents}>
                <div className={style.infoInputContainer}>
                    <div className={style.detailTitle}>정보 입력</div>
                    <div className={style.idInputContainer}>
                        <div className={style.miniTitle}>카톡 아이디</div>
                        <input className={style.idInput}
                            type="text"
                            onChange={(event) => user_information['id'] = event.target.value}></input>
                    </div>
                    <div className={style.ageInputContainer}>
                        <div className={style.miniTitle}>나이</div>
                        <input className={style.ageInput}
                            type="text"
                            onChange={(event) =>user_information['age'] = Number(event.target.value)}></input>
                    </div>
                    <div className={style.sexInputContainer}>
                        <div className={style.miniTitle}>성별</div>
                        <button className={style.mSex}
                            onClick={() => {
                                user_information['gender'] = 'male'
                                }}>남성</button>
                        <button className={style.fSex}
                            onClick={() => {
                                user_information['gender'] = 'female'
                                }}>여성</button>
                    </div>
                </div>
                <div className={style.mbtiInputContainer}>
                    <div className={style.detailTitle}>성격(MBTI)</div>
                    <div className={style.mbtiBtnContainer}>
                        <button className={style.enfj} 
                            onClick={() => {
                                user_information['mbti'] = "ENFJ";
                                }}>ENFJ</button>
                        <button className={style.infj}
                            onClick={() => {
                                user_information['mbti'] = "INFJ";
                                }}>INFJ</button>
                        <button className={style.intj}
                            onClick={() => {
                                user_information['mbti'] = "INTJ";
                                }}>INTJ</button>
                        <button className={style.entj}
                            onClick={() => {
                                user_information['mbti'] = "ENTJ";
                                }}>ENTJ</button>
                        <button className={style.enfp}
                            onClick={() => {
                                user_information['mbti'] = "ENFP";
                                }}>ENFP</button>
                        <button className={style.infp}
                            onClick={() => {
                                user_information['mbti'] = "INFP";
                                }}>INFP</button>
                        <button className={style.intp}
                            onClick={() => {
                                user_information['mbti'] = "INTP";
                                }}>INTP</button>
                        <button className={style.entp}
                            onClick={() => {
                                user_information['mbti'] = "ENTP";
                                }}>ENTP</button>
                        <button className={style.esfp}
                            onClick={() => {
                                user_information['mbti'] = "ESFP";
                                }}>ESFP</button>
                        <button className={style.isfp}
                            onClick={() => {
                                user_information['mbti'] = "ISFP";
                                }}>ISFP</button>
                        <button className={style.istp}
                            onClick={() => {
                                user_information['mbti'] = "ISTP";
                                }}>ISTP</button>
                        <button className={style.estp}
                            onClick={() => {
                                user_information['mbti'] = "ESTP";
                                }}>ESTP</button>
                        <button className={style.esfj}
                            onClick={() => {
                                user_information['mbti'] = "ESFJ";
                                }}>ESFJ</button>
                        <button className={style.isfj}
                            onClick={() => {
                                user_information['mbti'] = "ISFJ";
                                }}>ISFJ</button>
                        <button className={style.istj}
                            onClick={() => {
                                user_information['mbti'] = "ISTJ";
                                }}>ISTJ</button>
                        <button className={style.estj}
                            onClick={() => {
                                user_information['mbti'] = "ESTJ";
                                }}>ESTJ</button>
                    </div>
                </div>
                <div className={style.addrInputContainer}>
                    <div className={style.detailTitle}>거주지</div>
                    <div className={style.selectContainer}>
                        <div className={style.selectAddress}>
                            <select id={style.sido} 
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

                        <div className={style.selectAddress}>     
                            <select id={style.sigugun} 
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
                <div className={style.keywordInputContainer}>
                    <div className={style.detailTitle}>키워드</div>
                    <div className={style.heightInputContainer}>
                        <div className={style.miniTitle}>키</div>
                            <input className={style.heightInput}
                            type="text"
                            onChange={(event) => user_information['height'] = Number(event.target.value)}></input>
                    </div>
                    <div className={style.keywordContentContainer}>
                        <div className={style.keywordBtnContainer}>
                            <button className={style.dog}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "강아지상"];
                                    }}>강아지상</button>
                            <button className={style.cat}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "고양이상"];
                                    }}>고양이상</button>
                            <button className={style.rabbit}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "토끼상"];
                                    }}>토끼상</button>
                            <button className={style.bear}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "곰상"];
                                    }}>곰상</button>
                            <button className={style.kind}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "다정한"];
                                    }}>다정한</button>
                            <button className={style.calm}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "차분한"];
                                    }}>차분한</button>
                            <button className={style.active}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "활발한"];
                                    }}>활발한</button>
                            <button className={style.cute}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "귀여운"];
                                    }}>귀여운</button>
                            <button className={style.thin}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "마른"];
                                    }}>마른</button>
                            <button className={style.muscle}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "근육질"];
                                    }}>근육질</button>
                            <button className={style.normal}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "보통"];
                                    }}>보통</button>
                            <button className={style.full}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "통통한"];
                                    }}>통통한</button>
                            <button className={style.game}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "게임"];
                                    }}>게임</button>
                            <button className={style.movie}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "영화보기"];
                                    }}>영화보기</button>
                            <button className={style.trip}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "여행"];
                                    }}>여행</button>
                            <button className={style.exercise}
                                onClick={() => {
                                    user_information['keyword'] = [...user_information['keyword'], "운동"];
                                    }}>운동</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.nextContainer}>
                    <button className={style.nextBtn}
                        type='submit'
                        onClick={() => {
                        navigate("/signup2");
                        props.getUserData(user_information['id'], user_information['age'], user_information['height'], user_information['gender'], user_information['link'], user_information['mbti'], user_information['addr'], user_information['keyword']);
                        }}
                    >
                        다음
                    </button>
            </div>
        </div>
        <footer>
            랑피드
        </footer>
        </div>
    );
}

export default Signup;