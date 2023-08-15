import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/*
        "image":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png",
        "name":"Minnie Mouse",
        "age":65,
        "weight": 30,
        "history":"Mickey Mouse is an American cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime icon and mascot of The Walt Disney Company",
        "relatedmovieserie": "movie1, movie2, movie8, movie4"
*/
const AddChar = () => {


  const [image, setImage] =useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [weight, setWeight] =useState(0);
  const [history, setHistory]=useState('');
  const [relatedmovieserie, setRelatedmovieserie]=useState('');

  return (
   <>
        <Container style={{ width: '30rem' }} className="mt-5 shadow p-3 mb-3 rounded">

              <h2 className="text-center text-primary mb-4 ">Add a Character</h2>
                <Form>
                <Form.Group className="mb-3" >
                  <Form.Label>Name of the character</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Image url of the character</Form.Label>
                  <Form.Control type="text" placeholder="Enter url" />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Weight of the Character</Form.Label>
                  <Form.Control type="number"  style={{ width: '8rem' }}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Age of the Character</Form.Label>
                  <Form.Control type="number" style={{ width: '8rem' }} />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Short history of the character</Form.Label>
                  <Form.Control as="textarea"  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
          </Container>
   </>
  )
}

export default AddChar
