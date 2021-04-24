import React,{useState, useEffect} from 'react'
import axios from 'axios'



function APIFetcher() {
    const [data,setData] = useState()

    const fetcher = ()=>{
        return axios.get('https://randomuser.me/api').
        then(({data})=>{
            setData(JSON.stringify(data));
            console.log(data);
        }).
        catch(err=>{
            setData("The link is broken :/")
        })
    }

    
    return (
        <div>
            <button onClick={fetcher}>click</button>
            <p>{data}</p>
        </div>
    )
}

export default APIFetcher
