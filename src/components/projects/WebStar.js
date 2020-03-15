import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaMobileAlt} from 'react-icons/all';

export default function WebStar(props) {
    return (
        <div className="bg-light">
            <Time month="September" year="2016"/>
            <Background img="img/projects/webstar.jpg"
                        heading={<>
                            <div className="mx-2 pt-3" style={{background: '#0008'}}>
                                <h2 className="display-4 text-center mt-4">WebStar</h2>
                                <h3 className="text-center">Hands-on software design mentoring.</h3>
                                <hr/>
                                <div className="container pt-5">
                                    <ListGroup variant="flush">
                                        <LinkItem
                                            url="https://rvanasa.github.io/webstar/"
                                            icon={<FaMobileAlt/>}>
                                            Promotional Website
                                        </LinkItem>
                                    </ListGroup>
                                </div>
                            </div>
                        </>}>
            </Background>
        </div>
    );
}