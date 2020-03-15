import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaMobileAlt} from 'react-icons/all';

export default function FastCode(props) {
    return (
        <div style={{background: '#000'}}>
            <Time month="February" year="2017"/>
            <Background img="img/projects/fastcode.jpg"
                        heading={<>
                        <div className="pt-5" style={{background: '#0008'}}>
                            <h2 className="display-4 text-center mt-4">FastCode</h2>
                            <h3 className="text-center">
                                The official attendance system for the CO FBLA State Leadership Conference.
                            </h3>
                            <hr/>
                            <div className="container pt-5" style={{maxWidth: '60em'}}>
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://fastcode.herokuapp.com"
                                        icon={<FaMobileAlt/>}>
                                        Responsive Webapp
                                    </LinkItem>
                                </ListGroup>
                            </div>
                        </div>
                    </>}>
            </Background>
        </div>
    );
}