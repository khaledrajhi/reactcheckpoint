import './App.css';
import React from 'react';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import { Card, Button } from 'react-bootstrap'; 


function App() {


  return (
  <div className="app-container">
    <Card style={{ width: '20rem' }}>
      <Card.Img
  id="one"
  variant="top"
  src="https://media.wired.com/photos/6621af2c255c13bb362f5337/master/w_960,c_limit/logitech-pro-x-tkl-keyboard-Reviewer-Photo-SOURCE-Eric-Ravenscraft.jpg"
  style={{ width: '100%', height: 'auto' }} 
/>
      <Card.Body>
        <Card.Title class = "card-title"> <Name/> </Card.Title>
        <Card.Text class = "card-text">
          <Description/>
        </Card.Text>
        <Button variant="primary">
          ichri terba77 <Price/>
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
}




export default App;