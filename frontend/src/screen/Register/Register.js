import style from "./Register.module.css";
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../../data/Hangjungdong";
import { useState } from "react";
import axios from 'axios';

function Register() {
    let navigate = useNavigate();

    const [input, setInput] = useState({
        id: '',
        age: 0,
        sex: '',
        height: 0,
        mbti: '',
        addr: '',
        keyword: [],
        ideal_age: 0,
        ideal_height: 0,
        ideal_mbti: [],
        ideal_keyword: []
    });

/*    const {id, age, sex, height, mbti, addr, keyword, ideal_age, ideal_height, ideal_mbti, ideal_keyword} = input;

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]:value
        });
    };

    axios.get('http://localhost:5000/api/users/createadmin')
        .then(response => console.log(response.data))
        .catch(error => console.error(error));

    const handleMale = () => {
        setInput({
            ...input,
            ['sex']: 'male'
        })
    };

    const handleFemale = () => {
        setInput({
            ...input,
            ['sex']: 'female'
        })
    };

    const handleMbti = (value) => {
        setInput({
            ...input,
            ['mbti']: value
        })
    };
*/
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
                            name="id"
                            //value={id}
                            //onChange={onChangeInput}
                        ></input>
                    </div>
                    <div className={style.ageInputContainer}>
                        <div className={style.miniTitle}>나이</div>
                        <input className={style.ageInput}
                            type="text"
                            name="age"
                            //value={age}
                            //onChange={onChangeInput}
                        ></input>
                    </div>
                    <div className={style.sexInputContainer}>
                        <div className={style.miniTitle}>성별</div>
                        <button className={style.mSex}
                            //value={false}
                            //onClick={handleMale}
                        >남성</button>
                        <button className={style.fSex}
                            //value={false}
                            //onClick={handleFemale}
                        >여성</button>
                    </div>
                    <div className={style.heightInputContainer}>
                        <div className={style.miniTitle}>키</div>
                            <input className={style.heightInput}
                            type="text"
                            name="height"
                            //value={height}
                            //onChange={onChangeInput}
                        ></input>
                    </div>
                </div>
                <div className={style.mbtiInputContainer}>
                    <div className={style.detailTitle}>성격(MBTI)</div>
                    <div className={style.mbtiBtnContainer}>
                        <button className={style.enfj} 
                            //onClick={handleMbti('ENFJ')}
                            >ENFJ</button>
                        <button className={style.infj}
                            //onClick={handleMbti('INFJ')}
                            >INFJ</button>
                        <button className={style.intj}
                            //onClick={handleMbti('INTJ')}
                            >INTJ</button>
                        <button className={style.entj}
                            //onClick={handleMbti('ENTJ')}
                            >ENTJ</button>
                        <button className={style.enfp}
                            //onClick={handleMbti('ENFP')}
                            >ENFP</button>
                        <button className={style.infp}
                            //onClick={handleMbti('INFP')}
                            >INFP</button>
                        <button className={style.intp}
                            //onClick={handleMbti('INTP')}
                            >INTP</button>
                        <button className={style.entp}
                            //onClick={handleMbti('ENTP')}
                            >ENTP</button>
                        <button className={style.esfp}
                            //onClick={handleMbti('ESFP')}
                            >ESFP</button>
                        <button className={style.isfp}
                            //onClick={handleMbti('ISFP')}
                            >ISFP</button>
                        <button className={style.istp}
                            //onClick={handleMbti('ISTP')}
                            >ISTP</button>
                        <button className={style.estp}
                            //onClick={handleMbti('ESTP')}
                            >ESTP</button>
                        <button className={style.esfj}
                            //onClick={handleMbti('ESFJ')}
                            >ESFJ</button>
                        <button className={style.isfj}
                            //onClick={handleMbti('ISFJ')}
                            >ISFJ</button>
                        <button className={style.istj}
                            //onClick={handleMbti('ISTJ')}
                            >ISTJ</button>
                        <button className={style.estj}
                            //onClick={handleMbti('ESTJ')}
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
                    <input className={style.idealAgeInput} 
                        type="range"
                        name="ideal_age"
                        //value={ideal_age}
                        //onChange={onChangeInput}
                    ></input>
                </div>
                <div className={style.idealHeightInputContainer}>
                    <div className={style.detailTitle}>이상형 키</div>
                    <input className={style.idealHeightInput} 
                        type='range'
                        name="ideal_height"
                        //value={ideal_height}
                        //onChange={onChangeInput}
                    ></input>   
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
            <div className={style.registerContainer}>
                    <button className={style.registerBtn}
                        type='submit'
                        onClick={() => {
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