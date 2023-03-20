import style from "./Register.module.css";
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../../data/Hangjungdong";
import { useEffect, useState } from "react";
import axios from 'axios';

function Register() {
    let navigate = useNavigate();

    let [input, setInput] = useState({
        id: '',
        age: 0,
        sex: '',
        height: 0,
        mbti: '',
        addr: '서울 강남',
        keyword: [],
        ideal_age: [],
        ideal_height: [],
        ideal_mbti: [],
        ideal_keyword: []
    });

    const {id, age, sex, height, mbti, addr, keyword, ideal_age, ideal_height, ideal_mbti, ideal_keyword} = input;

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setInput = ()=>{setInput({
            ...input,
            [name]:value
        })};
    };

    const handleMale = () => {
        setInput = ()=>{setInput({
            ...input,
            ['sex']: 'male'
        })};
    };

    const handleFemale = () => {
        setInput = ()=>{setInput({
            ...input,
            ['sex']: 'female'
        })};
    };

    const handleMbti = (value) => {
        setInput = ()=>{setInput({
            ...input,
            ['mbti']: value
        })};
    };

    const handleKeyword = (value) => {
        setInput = ()=>{setInput({
            ...input,
            ['ketword']: ['ketword'].concat(value)
        })};
    };

    const handleHeight = () => {
        setInput = ()=>{setInput({
            ...input,
            ['ideal_height']: [170, 180]
        })};
    };

    const handleAge = () => {
        setInput = ()=>{setInput({
            ...input,
            ['ideal_age']: [20, 25]
        })};
    };

    /*const handleAddr = () => {
        setInput = ()=>{setInput({
            ...input,
            ['addr']: "서울 강남"
        })};
    };*/

    const handleIdealMbti = (value) => {
        setInput = ()=>{setInput({
            ...input,
            ['ideal_mbti']: ['ideal_mbit'].concat(value)
        })};
    };

    const handleIdealKeyword = (value) => {
        setInput = ()=>{setInput({
            ...input,
            ['ideal_ketword']: ['ideal_ketword'].concat(value)
        })};
    };


    const onClickRegister = () => {
        axios.post("http://localhost:5000/api/users/signup",{
            username: id,
            age: age,
            gender: sex,
            mbti: mbti,
            residence: addr,
            height: height,
            keyword: keyword,
            idealAge: ideal_age,
            idealMbti: ideal_mbti,
            idealHeight: ideal_height,
            idealKeyword: ideal_keyword
        })
        .then((res) => {
            console.log("회원가입 성공", res.data);
        })
        .catch((err) => {
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
                    <div className={style.detailTitle}>정보 입력</div>
                    <div className={style.idInputContainer}>
                        <div className={style.miniTitle}>카톡 아이디</div>
                        <input className={style.idInput}
                            type="text"
                            name="id"
                            onChange={onChangeInput}
                        ></input>
                    </div>
                    <div className={style.ageInputContainer}>
                        <div className={style.miniTitle}>나이</div>
                        <input className={style.ageInput}
                            type="text"
                            name="age"
                            onChange={onChangeInput}
                        ></input>
                    </div>
                    <div className={style.sexInputContainer}>
                        <div className={style.miniTitle}>성별</div>
                        <button className={style.mSex}
                            onClick={handleMale}
                        >남성</button>
                        <button className={style.fSex}
                            onClick={handleFemale}
                        >여성</button>
                    </div>
                    <div className={style.heightInputContainer}>
                        <div className={style.miniTitle}>키</div>
                            <input className={style.heightInput}
                            type="text"
                            name="height"
                            onChange={onChangeInput}
                        ></input>
                    </div>
                </div>
                <div className={style.mbtiInputContainer}>
                    <div className={style.detailTitle}>성격(MBTI)</div>
                    <div className={style.mbtiBtnContainer}>
                        <button className={style.enfj} 
                            onClick={handleMbti('ENFJ')}
                            >ENFJ</button>
                        <button className={style.infj}
                            onClick={handleMbti('INFJ')}
                            >INFJ</button>
                        <button className={style.intj}
                            onClick={handleMbti('INTJ')}
                            >INTJ</button>
                        <button className={style.entj}
                            onClick={handleMbti('ENTJ')}
                            >ENTJ</button>
                        <button className={style.enfp}
                            onClick={handleMbti('ENFP')}
                            >ENFP</button>
                        <button className={style.infp}
                            onClick={handleMbti('INFP')}
                            >INFP</button>
                        <button className={style.intp}
                            onClick={handleMbti('INTP')}
                            >INTP</button>
                        <button className={style.entp}
                            onClick={handleMbti('ENTP')}
                            >ENTP</button>
                        <button className={style.esfp}
                            onClick={handleMbti('ESFP')}
                            >ESFP</button>
                        <button className={style.isfp}
                            onClick={handleMbti('ISFP')}
                            >ISFP</button>
                        <button className={style.istp}
                            onClick={handleMbti('ISTP')}
                            >ISTP</button>
                        <button className={style.estp}
                            onClick={handleMbti('ESTP')}
                            >ESTP</button>
                        <button className={style.esfj}
                            onClick={handleMbti('ESFJ')}
                            >ESFJ</button>
                        <button className={style.isfj}
                            onClick={handleMbti('ISFJ')}
                            >ISFJ</button>
                        <button className={style.istj}
                            onClick={handleMbti('ISTJ')}
                            >ISTJ</button>
                        <button className={style.estj}
                            onClick={handleMbti('ESTJ')}
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
                                onClick={handleKeyword('강아지상')}
                                >강아지상</button>
                            <button className={style.cat}
                                onClick={handleKeyword('고양이상')}
                                >고양이상</button>
                            <button className={style.rabbit}
                                onClick={handleKeyword('토끼상')}
                                >토끼상</button>
                            <button className={style.bear}
                                onClick={handleKeyword('곰상')}
                                >곰상</button>
                            <button className={style.kind}
                                onClick={handleKeyword('다정한')}
                                >다정한</button>
                            <button className={style.calm}
                                onClick={handleKeyword('차분한')}
                                >차분한</button>
                            <button className={style.active}
                                onClick={handleKeyword('활발한')}
                                >활발한</button>
                            <button className={style.cute}
                                onClick={handleKeyword('귀여운')}
                                >귀여운</button>
                            <button className={style.thin}
                                onClick={handleKeyword('마른')}
                                >마른</button>
                            <button className={style.muscle}
                                onClick={handleKeyword('근육질')}
                                >근육질</button>
                            <button className={style.normal}
                                onClick={handleKeyword('보통')}
                                >보통</button>
                            <button className={style.full}
                                onClick={handleKeyword('통통한')}
                                >통통한</button>
                            <button className={style.game}
                                onClick={handleKeyword('게임')}
                                >게임</button>
                            <button className={style.movie}
                                onClick={handleKeyword('영화보기')}
                                >영화보기</button>
                            <button className={style.trip}
                                onClick={handleKeyword('여행')}
                                >여행</button>
                            <button className={style.exercise}
                                onClick={handleKeyword('운동')}
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
                        onChange={handleAge}
                    ></input>
                </div>
                <div className={style.idealHeightInputContainer}>
                    <div className={style.detailTitle}>이상형 키</div>
                    <input className={style.idealHeightInput} 
                        type='range'
                        name="ideal_height"
                        onChange={handleHeight}
                    ></input>   
                </div>
                <div className={style.idealMbtiInputContainer}>
                    <div className={style.detailTitle}>이상형 성격(MBTI)</div>
                    <div className={style.idealMbtiBtnContainer}>
                        <button className={style.idealEnfj}
                            onClick={handleIdealMbti('ENFJ')}
                        >ENFJ</button>
                        <button className={style.idealInfj}
                            onClick={handleIdealMbti('INFJ')}
                        >INFJ</button>
                        <button className={style.idealIntj}
                            onClick={handleIdealMbti('INTJ')}
                        >INTJ</button>
                        <button className={style.idealEntj}
                            onClick={handleIdealMbti('ENTJ')}
                        >ENTJ</button>
                        <button className={style.idealEnfp}
                            onClick={handleIdealMbti('ENFP')}
                        >ENFP</button>
                        <button className={style.idealInfp}
                            onClick={handleIdealMbti('INFP')}
                        >INFP</button>
                        <button className={style.idealIntp}
                            onClick={handleIdealMbti('INTP')}
                        >INTP</button>
                        <button className={style.idealEntp}
                            onClick={handleIdealMbti('ENTP')}
                        >ENTP</button>
                        <button className={style.idealEsfp}
                            onClick={handleIdealMbti('ESFP')}
                        >ESFP</button>
                        <button className={style.idealIsfp}
                            onClick={handleIdealMbti('ISFP')}
                        >ISFP</button>
                        <button className={style.idealIstp}
                            onClick={handleIdealMbti('ISTP')}
                        >ISTP</button>
                        <button className={style.idealEstp}
                            onClick={handleIdealMbti('ESTP')}
                        >ESTP</button>
                        <button className={style.idealEsfj}
                            onClick={handleIdealMbti('ESFJ')}
                        >ESFJ</button>
                        <button className={style.idealIsfj}
                            onClick={handleIdealMbti('ISFJ')}
                        >ISFJ</button>
                        <button className={style.idealIstj}
                            onClick={handleIdealMbti('ISTJ')}
                        >ISTJ</button>
                        <button className={style.idealEstj}
                            onClick={handleIdealMbti('ESTJ')}
                        >ESTJ</button>
                    </div>
                </div>
                
                <div className={style.idealKeywordInputContainer}>
                    <div className={style.idealKeywordContentContainer}>
                        <div className={style.detailTitle}>이상형 키워드</div>
                        <div className={style.idealKeywordBtnContainer}>
                            <button className={style.idealDog}
                                onClick={handleIdealKeyword('강아지상')}
                            >강아지상</button>
                            <button className={style.idealCat}
                                onClick={handleIdealKeyword('고양이상')}
                            >고양이상</button>
                            <button className={style.idealRabbit}
                                onClick={handleIdealKeyword('토끼상')}
                            >토끼상</button>
                            <button className={style.idealBear}
                                onClick={handleIdealKeyword('곰상')}
                            >곰상</button>
                            <button className={style.idealKind}
                                onClick={handleIdealKeyword('다정한')}
                            >다정한</button>
                            <button className={style.idealCalm}
                                onClick={handleIdealKeyword('차분한')}
                            >차분한</button>
                            <button className={style.idealActive}
                                onClick={handleIdealKeyword('활발한')}
                            >활발한</button>
                            <button className={style.idealCute}
                                onClick={handleIdealKeyword('귀여운')}
                            >귀여운</button>
                            <button className={style.idealThin}
                                onClick={handleIdealKeyword('마른')}
                            >마른</button>
                            <button className={style.idealMuscle}
                                onClick={handleIdealKeyword('근육질')}
                            >근육질</button>
                            <button className={style.idealNormal}
                                onClick={handleIdealKeyword('보통')}
                            >보통</button>
                            <button className={style.idealFull}
                                onClick={handleIdealKeyword('통통한')}
                            >통통한</button>
                            <button className={style.idealGame}
                                onClick={handleIdealKeyword('게임')}
                            >게임</button>
                            <button className={style.idealMovie}
                                onClick={handleIdealKeyword('영화보기')}
                            >영화보기</button>
                            <button className={style.idealTrip}
                                onClick={handleIdealKeyword('여행')}
                            >여행</button>
                            <button className={style.idealExercise}
                                onClick={handleIdealKeyword('운동')}
                            >운동</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.registerContainer}>
                    <button className={style.registerBtn}
                        type='submit'
                        onClick={() => {
                            onClickRegister();
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