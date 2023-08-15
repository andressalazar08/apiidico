import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import '../App.css';

const DetailChar = () => {

  const {id} = useParams();

  const [image, setImage] =useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [weight, setWeight] =useState(0);
  const [history_w, setHistory_w]=useState('');
  const [relatedmovieserie, setRelatedmovieserie]=useState('');

  const getSingleChars = async()=>{

    const  { data }  = await axios.get(process.env.REACT_APP_BACKEND_URL+"api/characters/character/"+id)
    setImage(data.image)
    setName(data.name)
    setAge(data.age)
    setWeight(data.weight)
    setHistory_w(data.history)
    setRelatedmovieserie(data.relatedmovieserie)

  }

  useEffect(()=>{
    getSingleChars()
  },[id])


  return (
    <div className='App'>
        <Card style={{ width: '18rem' }} className='mx-auto m-4 shadow p-3 mb-3  rounded' >
            <div className='d-flex justify-content-between'>
              <Card.Img  src={image} style={{ width: '10rem' }}/>
              <Card.Title className='my-auto'>{name}</Card.Title>
            </div>
            <Card.Body>

              <p >Age: {age}   |   Weight:{weight} </p>

              <p >{history_w}</p>
              <p >Series or Movies: {relatedmovieserie}</p>

              <div className='d-flex justify-content-around'>
              <Link to={`/char/edit/${id}`}>
                <Button variant="success">Edit</Button>
              </Link>


              <Link to={`/char/${id}`}>
                <Button variant="danger">Delete</Button>
              </Link>
              </div>

              <Link to={`/getChars`} >
                <Button variant="info" className="mt-3">Back</Button>
              </Link>

            </Card.Body>
          </Card>
    </div>
  )
}

export default DetailChar
