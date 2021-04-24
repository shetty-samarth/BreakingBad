import React, { Component, useM } from 'react'
import '../components/Counter.css'


export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    Increment = ()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }

    Decrement = () =>{
        this.setState((prevState)=>({
            count:prevState.count-1
        }))
    }
    render() {
        const arr = ['one','two','three']
        return (
            <div className='counter'>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decement</button>

                
            </div>
        )
    }
}

export default Counter
