import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Result.css'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetAnswerAction } from '../redux/result_reducer';
import { attempts_number, earnPoints_Number, flagResult } from '../helper/helper';
import { usePublishResult } from '../hooks/setResult';

export default function Result() {
    const dispatch = useDispatch();

    const {questions : {queue, answers}, result : {result, userId}} = useSelector(state=>state)
    
    useEffect(()=>{
        console.log(answers)
    })

    const totalPoints = queue.length * 10;
    const attempts = attempts_number(result);
    const earnPoints = earnPoints_Number(result, answers, 10);
    const flag = flagResult(totalPoints, earnPoints)

    // store user data result

    usePublishResult({result, username: userId, attempts, points:earnPoints, achieved : flag ? "Passed":"Failed"})

    useEffect(()=>{
        console.log({attempts, earnPoints, flag})
    })

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetAnswerAction())
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>  
                <span className='bold'>{userId}</span>  
            </div>
            <div className='flex'>
                <span>Total Quiz Point</span>  
                <span className='bold'>{totalPoints || 0}</span>  
            </div>  
            <div className='flex'>
                <span>Total Questions</span>  
                <span className='bold'>{queue.length || 0}</span>  
            </div>
            <div className='flex'>
                <span>Total attempts</span>  
                <span className='bold'>{attempts || 0}</span>  
            </div>
            <div className='flex'>
                <span>Total Earn points</span>  
                <span className='bold'>{earnPoints || 0}</span>  
            </div>
            <div className='flex'>
                <span>Quiz Result</span>  
                <span style={{color : `${flag ? "#2aff95" : "#ff2a66"}`}} className='bold' >{ flag ? "Passed" : "Failed"}</span>  
            </div>
        </div>
        <div className='start'>
        <Link className='btn'  to={'/'} onClick={onRestart}>Restart</Link>
        </div>   
        <div className='container'>
          <ResultTable/>
      </div> 
    </div>
  )
}
