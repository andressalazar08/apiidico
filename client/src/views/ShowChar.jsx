import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ShowChar = () => {


  const [characters, setCharacters] = useState([])

  const getChars = async()=>{
    const response = await axios.get("http://localhost:4000/api/characters/allCharacters")
    console.log(response)
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
