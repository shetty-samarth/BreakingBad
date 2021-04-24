import React, { Component } from 'react'
import Child from './Counter/Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             seed:40
        } 
    }
    

    seeder = ()=>{
        this.setState(()=>({seed:(Number.parseInt(Math.random()*100))}))
        console.log(this.state.seed)
    }
    render() {
        return (
            <div>
                <Child seed = {this.state.seed}/>
                <button onClick={this.seeder}>Seeder</button>
            </div>
        )
    }
}

export default Parent
