import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { Link } from 'react-router-dom';

const ChardCard = ({ character }) => {
  return (
    <div className='App'>

          <Card style={{ width: '15rem' }} className='mx-auto m-4 shadow p-3 mb-3 bg-primary rounded' >
            <Card.Img variant="top" src={character.image} className='p-5'/>
            <Card.Body>
              <Card.Title className='text-white'>{character.name}</Card.Title>
              <Link to={`char/${character.id}`}>
                <Button variant="info">Ver detalles</Button>
              </Link>

            </Card.Body>
          </Card>
    </div>
  )
}

export default ChardCard


{/* <div>
                    <h3 key={index}>{c.name} and {c.id}</h3>
                    <img src={c.image} alt={index}></img>
                </div> */}