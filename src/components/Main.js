import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

import "../styles/Main.css"
import { useDispatch } from 'react-redux';
import { setuserId } from '../redux/result_reducer';

export default function Main() {
    const inputRef= useRef(null);
    const dispatch = useDispatch();

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setuserId(inputRef.current?.value))
        }
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <ol class="section">
                <li class="text-light">There are 10 questions one after another.</li>
                <li class="text-light">10 points awarded for the correct answer.</li>
                <li class="text-light">Each question has 3 options and you have to choose only one option.</li>
                <li class="text-light">You can review and change answers before the quiz finish.</li>
                <li class="text-light">The result will be declared at the end of the quiz.</li>
            </ol>

            <form id='form'>
                <input ref={inputRef} className="userid" type='text' placeholder='Username*' />
            </form>
            <div className='start'>
                <Link className='btn'  to={'quiz'} onClick={startQuiz} > Start Quiz</Link>
            </div>
        </div>
    )
}

