import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';


const ShowChar = () => {


  const [characters, setCharacters] = useState([])

  const getChars = async()=>{

    const  { data }  = await axios.get(process.env.REACT_APP_BACKEND_URL+"api/characters/allCharacters")
    setCharacters(data)

  }

  useEffect(()=>{
    getChars()
  },[])
  return (
    <div className='App'>
        <h1>All characters</h1>

        {characters.map((c,index)=>{
           return(
            <div>
                <h3 key={index}>{c.name}</h3>
                <img src={c.image} alt={index}></img>
            </div>
           )
          })
        }

    </div>
  )
}

export default ShowChar
