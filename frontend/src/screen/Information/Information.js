import style from "./Information.module.css";
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../../data/Hangjungdong";
import { useState } from "react";

function Information(props) {
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
        <div className={style.wrap}>
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.subTitle}>정보 수정</div>
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
                    <div className={style.heightInputContainer}>
                        <div className={style.miniTitle}>키</div>
                            <input className={style.heightInput}
                            type="text"
                            onChange={(event) => user_information['height'] = Number(event.target.value)}></input>
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
            <div id={style.containerContents}>
                <div className={style.idealAgeInputContainer}>
                    <div className={style.detailTitle}>이상형 나이</div>
                    <input className={style.idealAgeInput} type="range"></input>
                </div>
                <div className={style.idealHeightInputContainer}>
                    <div className={style.detailTitle}>이상형 키</div>
                    <input className={style.idealHeightInput} type='range'></input>   
                </div>
                <div className={style.idealMbtiInputContainer}>
                    <div className={style.detailTitle}>이상형 성격(MBTI)</div>
                    <div className={style.idealMbtiBtnContainer}>
                        <button className={style.idealEnfj}>ENFJ</button>
                        <button className={style.idealInfj}>INFJ</button>
                        <button className={style.idealIntj}>INTJ</button>
                        <button className={style.idealEntj}>ENTJ</button>
                        <button className={style.idealEnfp}>ENFP</button>
                        <button className={style.idealInfp}>INFP</button>
                        <button className={style.idealIntp}>INTP</button>
                        <button className={style.idealEntp}>ENTP</button>
                        <button className={style.idealEsfp}>ESFP</button>
                        <button className={style.idealIsfp}>ISFP</button>
                        <button className={style.idealIstp}>ISTP</button>
                        <button className={style.idealEstp}>ESTP</button>
                        <button className={style.idealEsfj}>ESFJ</button>
                        <button className={style.idealIsfj}>ISFJ</button>
                        <button className={style.idealIstj}>ISTJ</button>
                        <button className={style.idealEstj}>ESTJ</button>
                    </div>
                </div>
                
                <div className={style.idealKeywordInputContainer}>
                    <div className={style.idealKeywordContentContainer}>
                        <div className={style.detailTitle}>이상형 키워드</div>
                        <div className={style.idealKeywordBtnContainer}>
                            <button className={style.idealDog}>강아지상</button>
                            <button className={style.idealCat}>고양이상</button>
                            <button className={style.idealRabbit}>토끼상</button>
                            <button className={style.idealBear}>곰상</button>
                            <button className={style.idealKind}>다정한</button>
                            <button className={style.idealCalm}>차분한</button>
                            <button className={style.idealActive}>활발한</button>
                            <button className={style.idealCute}>귀여운</button>
                            <button className={style.idealThin}>마른</button>
                            <button className={style.idealMuscle}>근육질</button>
                            <button className={style.idealNormal}>보통</button>
                            <button className={style.idealFull}>통통한</button>
                            <button className={style.idealGame}>게임</button>
                            <button className={style.idealMovie}>영화보기</button>
                            <button className={style.idealTrip}>여행</button>
                            <button className={style.idealExercise}>운동</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.saveContainer}>
                    <button className={style.saveBtn}
                        type='submit'
                        onClick={() => {
                        navigate("/select");
                        props.getUserData(user_information['id'], user_information['age'], user_information['height'], user_information['gender'], user_information['link'], user_information['mbti'], user_information['addr'], user_information['keyword']);
                        }}
                    >
                        정보 수정하기
                    </button>
            </div>
        </div>
        <footer>
            랑피드
        </footer>
        </div>
    );
}

export default Information;