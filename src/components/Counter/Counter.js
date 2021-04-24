import React,{useReducer, useMemo, useEffect, useCallback} from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import CounterChild from './CounterChild';
const initialState = 0
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return state + action.payload
        
        case 'decrement':
            return state-action.payload

        case 'reset':
            return initialState

        default:
            return state
    }
}

function Counter() {
    const getter = useCallback((type) =>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => console.log(json))
    },[])   
    

    useEffect(()=>{
        getter('todos');
    },[getter])

    const arr = useMemo(()=>{
        return ['one', 'two']
    },[])
    const [count1,dispatch1] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,initialState)
    return (
        <div>
            {console.log(count1)}
            <h1>Counter1: {count1}</h1>
            <h1>Counter2: {count2}</h1>
            <ButtonGroup>
                <Button style={{backgroundColor:'Red', color:'White'}} onClick={()=>dispatch1({type:'decrement',payload : 5})}>Decrement Counter1</Button>
                <Button style={{backgroundColor:'White', color:'blue'}} onClick={()=>dispatch1({type:'reset'})}>Reset Counter1</Button>
                <Button style={{backgroundColor:'Green',color:'White'}} onClick={()=>dispatch1({type:'increment',payload : 5})}>Increment Counter1</Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button style={{backgroundColor:'Red', color:'White'}} onClick={()=>dispatch2({type:'decrement', payload:5})}>Decrement Counter2</Button>
                <Button style={{backgroundColor:'White', color:'blue'}} onClick={()=>dispatch2({type:'reset'})}>Reset Counter2</Button>
                <Button style={{backgroundColor:'Green',color:'White'}} onClick={()=>dispatch2({type:'increment', payload :5})}>Increment Counter2</Button>
            </ButtonGroup>

            <CounterChild arr = {arr} getter = {getter}/>
        </div>
    )
}

export default Counter
