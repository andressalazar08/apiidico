import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Container, Row, Column } from 'react-bootstrap';
import ChardCard  from '../components/ChardCard';

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
          <div>
            <h1>All characters</h1>

            {characters.map((c,index)=>{
              return(

                <ChardCard character={c} key={index}/>
              )
              })
            }
          </div>
    </div>
  )
}

export default ShowChar
