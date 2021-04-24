import React,{useState} from 'react'

const initialCandies = ['Snickers','MnM','Twix','Mars'];

function CandyShop() {
    const[candy,setCandy] = useState(initialCandies);

    const dispenser = selectCandy =>{
    let curr = candy.filter(candy=>candy!=selectCandy)
    
    setCandy(curr);
}
    return (
        <div>
            
            <ul>
            {candy.length===0? (<button onClick={()=>setCandy(initialCandies)}>Refill</button>):
            (candy.map((candy,index)=>(
                <li key={index}>
                    <button onClick={()=>dispenser(candy)}>Dispense {candy}</button>
                </li>) 
            ))}
            </ul>
        </div>
    )
}

export default CandyShop
