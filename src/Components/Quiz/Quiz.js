import React, { useRef, useState } from "react";
// import '../Quiz/Quiz.css'
import { data } from "../../Assets/data";
import questionImage from '../../Assets/question.png';
import forwardImage from '../../Assets/next.png';
import userImg from '../../Assets/user.png';
const Quiz = () => {
    
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let[lock,setLock] = useState(false)
    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)
    let [score,setScore] = useState(0)
    let[result, setResult] = useState(false)
    let option_array = [option1, option2, option3, option4]
   
    const checkAns = (e,ans) =>{
        if (lock === false) {
            if(question.ans === ans){
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev => prev+1)
            }
            else {
                e.target.classList.add("wrong")
                setLock(true)
                option_array[question.ans-1].current.classList.add("correct")

            }
        }
       
    }
    const next = () => {
        if(lock ===true ){
            if (index === data.length-1) {
                setResult(true)
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option)=> {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null;
            })
        }
    }
    const reset = () =>{
        setIndex(0)
        setQuestion(data[0])
        setScore(0)
        setLock(false)
        setResult(false)
    }
    return (
        <div className="bg-quiz">
        <div className="hedear-nav">
            <div className="container-nav">
                <div className="logo-nav">
                    QUIZ
                </div>
                <div className="ultility-user">
                    <div className="rank-user">
                      
                    BXH
                    </div>
                    <div className="pro-user">
                    <img src={userImg} alt=""/>
                    Name
                    </div>
                </div>
            </div>
        </div>
        <div className="container-q">

            {result?<></> : <> 
            <div className="img-quiz">

            <img height={80} src={questionImage} alt="Question" />
            </div>

           
            <h2 className="ques-quiz"><span>{index+1}. {question.question}</span></h2>
                <div className="list-ans">

                <div id="ans" ref={option1} onClick={(e) => {checkAns(e,1)}}>A. {question.option1}</div>
                <div id="ans" ref={option2}  onClick={(e) => {checkAns(e,2)}}>B. {question.option2}</div>
                <div id="ans" ref={option3}  onClick={(e) => {checkAns(e,3)}}>C. {question.option3}</div>
                <div id="ans" ref={option4}  onClick={(e) => {checkAns(e,4)}}>D. {question.option4}</div>

                </div>
            <div className="btn-next" onClick={next}>
                NEXT
            <img src={forwardImage} alt="Forward" />
            </div>
            <div className="index"> {index+1} of {data.length} questions</div>
            </>}
          
           {result?<>
            <h2 className="title-end">You Scored {score} out of {data.length} </h2>
           {/* <button onClick={reset}>Reset</button> */}
           </> :<></>}
        </div>
    </div>
    )
}
export default Quiz