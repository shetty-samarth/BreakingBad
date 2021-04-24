import React, { Component } from 'react'

export class Child extends Component {
    constructor(props) {
        super(props)
        const {language,framework} = this.props;
        this.state = {
            count:0,
            seed:0
        }

    }
    
    static getDerivedStateFromProps(props,state){
        if(props.seed && state.seed!==props.seed){
            return{
                seed:props.seed,
                count:props.seed
            }
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
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decement</button>
            </div>
        )
    }
}

export default Child
