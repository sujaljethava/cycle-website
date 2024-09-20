import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'


const Drop = () => {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Fashion</Accordion.Header>
                    <Accordion.Body>
                        <li>
                            <Link to="#">Man</Link>
                        </li>
                        <li>
                            <Link to="#">Woman</Link>
                        </li>
                        <li>
                            <Link to="#">Kids</Link>
                        </li>
                        <li>
                            <Link to="#">Accessories</Link>
                        </li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Jewellwery</Accordion.Header>
                    <Accordion.Body>
                        <li>
                            <Link to="#">Rings</Link>
                        </li>
                        <li>
                            <Link to="#">Bracelets</Link>
                        </li>
                        <li>
                            <Link to="#">Neklaces</Link>
                        </li>
                        <li>
                            <Link to="#">Wedding bands</Link>
                        </li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Furniture</Accordion.Header>
                    <Accordion.Body>
                        <li>
                            <Link to="#">Living room</Link>
                        </li>
                        <li>
                            <Link to="#">Kitchen</Link>
                        </li>
                        <li>
                            <Link to="#">Office</Link>
                        </li>
                        <li>
                            <Link to="#">Home Decor</Link>
                        </li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Autoparts</Accordion.Header>
                    <Accordion.Body>
                        <li>
                            <Link to="#">Engine parts</Link>
                        </li>
                        <li>
                            <Link to="#">Exhust parts</Link>
                        </li>
                        <li>
                            <Link to="#">Brake parts</Link>
                        </li>
                        <li>
                            <Link to="#">Body parts</Link>
                        </li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Drop