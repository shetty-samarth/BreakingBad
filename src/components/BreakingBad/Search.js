import React,{useState} from 'react'

function Search({ getQuery }) {
    const[text,setText] = useState('')
    const onChange = (q)=>{
    setText(q);
    getQuery(q)
    }
    return (
        <div>
            <input type="text" className='form-control' style={{marginBottom:'10px'}} onChange={(e)=>onChange(e.target.value)}>
            </input>
        </div>
    )
}

export default Search
