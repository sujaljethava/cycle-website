import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import { Slider } from 'antd';

const Drop1 = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <input type="checkbox" name="Autopart" value="Autopart" />
                            <Link to="#"> Autopart(16)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Fashion" value="Fashion" />
                            <Link to="#"> Fashion(16)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Furniture" value="Furniture" />
                            <Link to="#"> Furniture(16)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Jewellery" value="Jewellery" />
                            <Link to="#"> Jewellery(16)</Link>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <input type="checkbox" name="Brand" value="Brand" />
                            <Link to="#"> Brand1(1)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Brand" value="Brand" />
                            <Link to="#"> Brand2(2)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Brand" value="Brand" />
                            <Link to="#"> Brand3(3)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Brand" value="Brand" />
                            <Link to="#"> Brand4(4)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Brand" value="Brand" />
                            <Link to="#"> Brand5(5)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Brand" value="Brand" />
                            <Link to="#"> Brand6(6)</Link>
                        </li>
                        <li>
                            <input type="checkbox" name="Brand" value="Brand" />
                            <Link to="#"> Brand7(7)</Link>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <Slider
                        defaultValue={10}
                        tooltip={{
                            open: true,
                        }}
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Drop1;
