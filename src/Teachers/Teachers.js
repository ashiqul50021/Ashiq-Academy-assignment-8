import React from 'react';
// import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Teachers.css'

const Teachers = (props) => {
    const { name, position, age, degree, experience, img, sellary } = props.teachers;
    return (
        <div className="col-md-4 border mb-5 mr-5">
            <img className="image-size mb-2" src={img} alt="" />

            <h4>{name}</h4>
            <p>Position: {position}</p>
            <p>Age: {age}</p>
            <p>Degree: {degree}</p>
            <p>Experience: {experience}</p>
            <p>Sellary: {sellary}</p>
            <Button onClick={() => props.handleAddToCart(props.teachers)} variant="primary"><FontAwesomeIcon icon={faCheck}/>Add to Cart</Button>

        </div>
    );
};

export default Teachers;