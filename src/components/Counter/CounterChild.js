import React,{useEffect} from 'react'

function CounterChild(props) {
    useEffect(()=>{
        props.getter('users')
    },[props.getter])
    console.log("counterChild rendered")
    return (
        <div>
            <h1>I am the counter Child</h1>
        </div>
    )
}

export default React.memo(CounterChild)
