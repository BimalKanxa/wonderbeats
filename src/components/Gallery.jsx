import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import { seminars } from '../javascript/CardData';
import styled from "styled-components"
import '../css/Gallery.css'
import Footer from './Footer';


const Container = styled.div`
margin-top: 4%;
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: #f5fbfd;
    position: relative;
    /* position: absolute; */
`


const Gallery = ()=> {
  return (
    <>
    <div className="heading">
    <h2>Our Events and Seminars</h2>
    </div>
    <Container>
      {seminars.map((seminar) => (
        <Card key={seminar.id} className='eventCard'>
          <Card.Img variant="top" src={seminar.img} />
          <Card.Body>
            <Card.Title>{seminar.college}</Card.Title>
          </Card.Body>
        </Card>
      ))}
   
    <Footer/>
    </Container>
    </>
  );
}

Event.propTypes = {
    item: PropTypes.object
}

export default Gallery;

         