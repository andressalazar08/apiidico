import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
/*
        "image":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png",
        "name":"Minnie Mouse",
        "age":65,
        "weight": 30,
        "history":"Mickey Mouse is an American cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime icon and mascot of The Walt Disney Company",
        "relatedmovieserie": "movie1, movie2, movie8, movie4"
*/
const AddChar = ({history}) => {


  const [image, setImage] =useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [weight, setWeight] =useState(0);
  const [history_w, setHistory_w]=useState('');
  const [relatedmovieserie, setRelatedmovieserie]=useState('');


  const addCharHandler = async(event)=>{
      try{
      event.preventDefault()

      const data = {
        name:name,
        image:image,
        age:age,
        weight:weight,
        history:history_w,
        relatedmovieserie:relatedmovieserie
      }

      await axios.post(process.env.REACT_APP_BACKEND_URL_POST, data)
      .then(res=>res.status===200?alert("Caracter creado con éxito"):alert("hubo un problema"))
      .catch(err=>alert(err))

      history.push('/getChars')

    }catch(error){
      console.log(error)
    }


  }



  return (
   <>
        <Container style={{ width: '30rem' }} className="mt-5 shadow p-3 mb-3 rounded">

              <h2 className="text-center text-primary mb-4 ">Add a Character</h2>
                <Form onSubmit={addCharHandler}>
                <Form.Group className="mb-3" >
                  <Form.Label>Name of the character</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      type="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Image url of the character</Form.Label>
                    <Form.Control
                      placeholder="Enter url"
                      value={image}
                      onChange={(e)=>setImage(e.target.value)}
                      type="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Weight of the Character</Form.Label>
                    <Form.Control
                      value={weight}
                      onChange={(e)=>setWeight(e.target.value)}
                      type="number"
                      style={{ width: '8rem' }}

                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Age of the Character</Form.Label>
                    <Form.Control
                      value={age}
                      onChange={(e)=>setAge(e.target.value)}
                      type="number"
                      style={{ width: '8rem' }}

                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Short history of the character</Form.Label>
                      <Form.Control
                        value={history_w}
                        onChange={(e)=>setHistory_w(e.target.value)}
                        as="textarea"

                      />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Related movies (separated with comma)</Form.Label>
                      <Form.Control
                        value={relatedmovieserie}
                        onChange={(e)=>setRelatedmovieserie(e.target.value)}
                        type="text"
                      />
                </Form.Group>

                <div className='d-flex justify-content-center'>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
          </Container>
   </>
  )
}

export default AddChar
