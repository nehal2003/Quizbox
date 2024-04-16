import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { Link, Navigate } from 'react-router-dom';

// import react redux
import {useDispatch, useSelector} from "react-redux"
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

const Quiz = ()=> {

  const [check, setCheck] = useState(undefined);
    
  const result = useSelector(state=>state.result.result);
  const { queue, trace } = useSelector(state=>state.questions);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(result);
    })

  function onNext(){
    // console.log("next is triggered");
    if(trace<queue.length)
    dispatch(MoveNextQuestion());

    if(result.length<=trace)
    dispatch(PushAnswer(check))

    setCheck(undefined);
  }
  function onPrev(){
    // console.log("Prev is triggered");
    if(trace>0)
    dispatch(MovePrevQuestion());
  }

  function onChecked(check){
    // console.log(check);
    setCheck(check);
  }

  // Finished test after the last Question
  if(result.length && result.length>=queue.length)
  {
    return <Navigate to={'/result'} replace={true} ></Navigate>
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <Questions onChecked={onChecked} />
      <div className='grid'>
        {trace>0 ? <button className='btn prev' onClick={onPrev}>Previous</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
      <div className='start'>
        <Link className='btn' to={'/result'}>Result</Link>
      </div>
    </div>
  )
}

export default Quiz;