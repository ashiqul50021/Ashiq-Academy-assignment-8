import React, { useEffect, useState } from 'react';
import Teachers from '../Teachers/Teachers';
import Group from '../Group/Group';
import {  Row, Col, CardGroup, Card } from 'react-bootstrap';

const Manage = () => {
    const [teachers, setTeachers] = useState([]);
    const [group, setGroup] = useState([]);

    useEffect(() => {
        fetch('./ashiq-academy.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, []);

    const handleAddToCart = (teachers) => {
        const newGroup = [...group, teachers];
        setGroup(newGroup);
    }
    return (
        <div>
            
                <Row>
                    <Col>
                        <CardGroup>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <div className="row ">
                                    {
                                        teachers.map(teachers => <Teachers
                                            key={teachers.key}
                                            teachers={teachers}
                                            handleAddToCart={handleAddToCart}
                                        ></Teachers>)
                                    }

                                    </div>

                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col md="auto border h-75 m-5">
                        <Group group={group}></Group>
                    </Col>

                </Row>

           

        </div>
    );
};

export default Manage;
