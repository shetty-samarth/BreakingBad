import React,{useState} from 'react'


function Cards(props) {
    
    
    return (
        <div style = {{width:'20%', margin: '10px auto 10px', border:'1px solid black'}}>
            {/* <button id='fire' style={{margin:'auto', backgroundColor:'green', display:'block'}} onClick={props.button} >Fire</button> */}
            <img src={props.avatar} style={{width:'90%', margin: '5px auto 5px', border:'1px solid black'}}></img>
            <h4><b>{props.name}</b></h4>
            <input type='text' onChange={props.nameChange}></input>
            <p>{props.children}</p>
            <button style={{margin:'5px 5px 5px 5px',color:'white',backgroundColor:'red', padding:'5px 5px 5px 5px'}} onClick={props.onDelete}>DELETE</button>

        </div>
    )
}

export default Cards
