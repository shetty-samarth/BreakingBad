import React,{useState} from 'react'
import faker, { fake } from 'faker'
import Cards from './Cards'
function CardParent() {

    const fired = ()=>{
        let fired = document.getElementById('fire');
        fired.style.backgroundColor='red';
        fired.innerHTML='fired';

    }
    const [cards, setCard] = useState([{name:`${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar:faker.image.avatar(),title:faker.name.jobTitle(), id:'0'},

    {name:`${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar:faker.image.avatar(),title:faker.name.jobTitle(),id:'1'},

    {name:`${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar:faker.image.avatar(),title:faker.name.jobTitle(),id:'2'},

    {name:`${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar:faker.image.avatar(),title:faker.name.jobTitle(),id:'3'}]
    )

    const deleter = (cardIndex)=>{
        const copyCard = [...cards];
        copyCard.splice(cardIndex,1);
        setCard(copyCard);
        //Trash test code below:
        // const classes = ['button'];
        // classes.push('blue','red')
        // console.log(classes);
        // classes.join(" ");
        // console.log("joined",classes);
    }
    const nameChange = (event,id)=>{
        const copyCard = [...cards];
        const edit = copyCard.findIndex(card=>card.id == id);
        copyCard[edit].name=event.target.value;
        setCard(copyCard);
    }

   
    return (
        <div>
           {cards.map((card,index)=><Cards name={card.name} avatar={card.avatar} key={card.id} onDelete={()=>deleter(index)} nameChange={(event)=>{nameChange(event,card.id)}}>{card.title} </Cards>)}
        </div>
    )
}

export default CardParent
