import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ShowChar = () => {


  const [characters, setCharacters] = useState([])

  const getChars = async()=>{

    const response = await axios.get(process.env.REACT_APP_BACKEND_URL+"api/characters/allCharacters")

  }

  useEffect(()=>{
    getChars()
  },[])
  return (
    <>
        <h1>All Characters</h1>

    </>
  )
}

export default ShowChar
