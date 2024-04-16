import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: [] 
    },
    reducers: {
        setuserId : (state,action)=>{
            state.userId = action.payload
        },
        pushResultAction: (state,action) =>{
            state.result.push(action.payload)
        },
        resetAnswerAction : ()=>{
            return {
                userId: null,
                result: []
            }
        },
        updateResultAction : (state,action)=>{
            const { trace, checked} = action.payload;
            state.result.fill(checked, trace,trace+1)
        }
    }
})

export const {setuserId, pushResultAction, resetAnswerAction, updateResultAction} =resultReducer.actions
export default resultReducer.reducer