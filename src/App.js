import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import Header from './components/BreakingBad/Header';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Characters from './components/BreakingBad/Characters';
import Search from './components/BreakingBad/Search';


function App() {
  const [items, setItems] = useState([])
  const[loading,setLoading] = useState(true);
  const [query,setQuery] = useState("")

  useEffect(()=>{
    const fetchItems = async()=>{
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setLoading(false);
    }
    fetchItems();
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)}/>
      <Characters isloading={loading} items={items} />
    </div>
  );
}

export default App;
