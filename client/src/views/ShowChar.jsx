import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ShowChar = () => {


  const [characters, setCharacters] = useState([])

  useEffect(()=>{
      // console.log(process.env.REACT_APP_BACKEND_URL)
      const getCharsData = async()=>{
        const { data } = await axios.get(process.env.BACKEND_URL+'api/characters/allCharacters')
        console.log(data)
      }
      getCharsData()
  },[])

  return (
    <>
        <h1>All Characters</h1>

    </>
  )
}

export default ShowChar
