import React from 'react'
import CharCard from './CharCard'
import spinner from '../../img/spinner.gif'

function Characters({items,isloading}) {
    return (
        <div>
            {isloading?(<img src={spinner} style = {{margin:'auto', display:'block'}} />):(<section className='cards'>
                {items.map(item=>(
                    <CharCard key = {item.char_id} item = {item}></CharCard>
                ))}
            </section>)}
        </div>
    )
}

export default Characters
