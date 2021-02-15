import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <div className="container-fluid text-center text-light mt-5">
             {/* <Container> */}
                    <Row className="bg-secondary p-4">
                        <Col sm={3}>Fairgate Tech</Col>
                        <Col sm={9}>Copyright 2021</Col>
                    </Row>
                   
            {/* </Container> */}
        </div>
    )
}

export default Footer;
