import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


export default class Home extends Component {
  constructor(props) {
    super(props);

  }
 

  render() {
    return (
        <div className="home">
       
      

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/HxxtDWvs/camping-men-1-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="foad">First slide label</h3>
      <p className="foad">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/NfTSPbrC/banner4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="foad">Second slide label</h3>
      <p className="foad">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/3rzzBzWD/banner1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     <h3 className="foad">Third slide label</h3>
      <p className="foad">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     



<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://i.postimg.cc/gjvTTkBt/5.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.postimg.cc/s2NqBLhm/2.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.postimg.cc/26LJnxdD/3.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>

    
  </Card>
</CardDeck>



<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://i.postimg.cc/RZGjmhCj/1.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.postimg.cc/s2NqBLhm/2.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="https://i.postimg.cc/26LJnxdD/3.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>

    
  </Card>
  
</CardDeck>
















      
    </div>


          )
        }
}