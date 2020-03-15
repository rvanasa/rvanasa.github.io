import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaChalkboard, FaMobileAlt} from 'react-icons/all';

export default function FastCode(props) {
    return (
        <div className="bg-light">
            <Time month="March" year="2017"/>
            <Background img="img/projects/deltafund.jpg"
                        heading={<>
                        <div className="mx-2 pt-3" style={{background: '#0008'}}>
                            <h2 className="display-4 text-center mt-4">DeltaFund</h2>
                            <h3 className="text-center">An intuitive fundraiser platform.</h3>
                            <h4 className="text-center text-warning mt-4">
                                First Place: Mobile App Development
                            </h4>
                            <h4 className="text-center text-warning">
                                CO FBLA State Leadership Conference
                            </h4>
                            <hr/>
                            <div className="container pt-5">
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://deltafund.herokuapp.com"
                                        icon={<FaMobileAlt/>}>
                                        Responsive Webapp
                                    </LinkItem>
                                    <LinkItem
                                        url="https://docs.google.com/presentation/d/1ty6qrE348FkL126NG2MONc0FIyPSGYtp5S_-3qDoa-s/edit?usp=sharing"
                                        icon={<FaChalkboard/>}>
                                        COSLC Presentation
                                    </LinkItem>
                                </ListGroup>
                            </div>
                        </div>
                    </>}>
            </Background>
        </div>
    );
}