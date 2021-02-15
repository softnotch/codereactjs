import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
// import FigureImage from 'react-bootstrap/FigureImage';
// import FigureCaption from 'react-bootstrap/FigureCaption';
import j from './img/j.svg';
import k from './img/k.svg';
import l from './img/j.svg';

function Product() {
    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">Our Products</h2>
            <Container>
           
                    <Row className="text-center">
                        <Col sm>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={j}
                                    roundedCircle 
                                />
                                <Figure.Caption>
                                    ugue mollis interdum.
                                </Figure.Caption>
                             </Figure>
                        </Col>
                        <Col sm>
                        <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={k}
                                    roundedCircle 
                                />
                                <Figure.Caption>
                                    ugue mollis interdum.
                                </Figure.Caption>
                             </Figure>
                        </Col>
                        <Col sm>
                        <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={l}
                                    roundedCircle 
                                />
                                <Figure.Caption>
                                    ugue mollis interdum.
                                </Figure.Caption>
                             </Figure>
                           
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Product;
