import style from "./Information.module.css";
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../../data/Hangjungdong";
import { useState } from "react";

function Information() {
    let navigate = useNavigate();

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
                        ></input>
                    </div>
                    <div className={style.ageInputContainer}>
                        <div className={style.miniTitle}>나이</div>
                        <input className={style.ageInput}
                            type="text"
                        ></input>
                    </div>
                    <div className={style.sexInputContainer}>
                        <div className={style.miniTitle}>성별</div>
                        <button className={style.mSex}
                        >남성</button>
                        <button className={style.fSex}
                        >여성</button>
                    </div>
                    <div className={style.heightInputContainer}>
                        <div className={style.miniTitle}>키</div>
                            <input className={style.heightInput}
                            type="text"
                        ></input>
                    </div>
                </div>
                <div className={style.mbtiInputContainer}>
                    <div className={style.detailTitle}>성격(MBTI)</div>
                    <div className={style.mbtiBtnContainer}>
                        <button className={style.enfj} 
                            >ENFJ</button>
                        <button className={style.infj}
                            >INFJ</button>
                        <button className={style.intj}
                            >INTJ</button>
                        <button className={style.entj}
                            >ENTJ</button>
                        <button className={style.enfp}
                            >ENFP</button>
                        <button className={style.infp}
                            >INFP</button>
                        <button className={style.intp}
                            >INTP</button>
                        <button className={style.entp}
                            >ENTP</button>
                        <button className={style.esfp}
                            >ESFP</button>
                        <button className={style.isfp}
                            >ISFP</button>
                        <button className={style.istp}
                            >ISTP</button>
                        <button className={style.estp}
                            >ESTP</button>
                        <button className={style.esfj}
                            >ESFJ</button>
                        <button className={style.isfj}
                            >ISFJ</button>
                        <button className={style.istj}
                            >ISTJ</button>
                        <button className={style.estj}
                            >ESTJ</button>
                    </div>
                </div>
                <div className={style.addrInputContainer}>
                    <div className={style.detailTitle}>거주지</div>
                    <div className={style.selectContainer}>
                        <div className={style.selectAddress}>
                            <select id={style.sido} 
                            >
                            <option value="">선택</option>
                            {/*sido.map((el) => (
                                <option key={el.sido} value={el.sido}>
                                {el.codeNm}
                                </option>
                            ))*/}
                            </select>
                        </div>

                        <div className={style.selectAddress}>     
                            <select id={style.sigugun} 
                            >
                            <option value="">선택</option>
                            {/*sigugun
                                .filter((el) => el.sido === val1)
                                .map((el) => (
                                <option key={el.sigugun} value={el.sigugun}>
                                    {el.codeNm}
                                </option>
                                ))*/}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.keywordInputContainer}>
                    <div className={style.detailTitle}>키워드</div>
                    <div className={style.keywordContentContainer}>
                        <div className={style.keywordBtnContainer}>
                            <button className={style.dog}
                                >강아지상</button>
                            <button className={style.cat}
                                >고양이상</button>
                            <button className={style.rabbit}
                                >토끼상</button>
                            <button className={style.bear}
                                >곰상</button>
                            <button className={style.kind}
                                >다정한</button>
                            <button className={style.calm}
                                >차분한</button>
                            <button className={style.active}
                                >활발한</button>
                            <button className={style.cute}
                                >귀여운</button>
                            <button className={style.thin}
                                >마른</button>
                            <button className={style.muscle}
                                >근육질</button>
                            <button className={style.normal}
                                >보통</button>
                            <button className={style.full}
                                >통통한</button>
                            <button className={style.game}
                                >게임</button>
                            <button className={style.movie}
                                >영화보기</button>
                            <button className={style.trip}
                                >여행</button>
                            <button className={style.exercise}
                                >운동</button>
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