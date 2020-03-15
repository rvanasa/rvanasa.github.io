import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {Button, ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub} from 'react-icons/all';

import './ColdSpace.scss';

export default function ColdSpace(props) {
    return (
        <>
            <Time month="February" year="2020"/>
            <div>
                <Background img="img/projects/cold-space.jpg"
                            heading={<>
                                <h2 className="display-4 text-center mt-4">Cold Space</h2>
                                <h3 className="text-center">An online narrative experience.</h3>
                                <hr/>
                                <div style={{background: '#11152288'}}>
                                    <div className="text-center" style={{height: '50vh'}}>
                                        <a href="https://rvanasa.github.io/cold-space" target="_blank"
                                           rel="noopener noreferrer">
                                            <Button variant="outline-light rounded-circle clickable cold-space-planet"/>
                                        </a>
                                    </div>
                                    <div style={{opacity: .5}}>
                                        <ListGroup variant="flush">
                                            <LinkItem
                                                url="https://github.com/rvanasa/cold-space"
                                                icon={<FaGithub/>}>
                                                Source Code
                                            </LinkItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </>}>
                </Background>
            </div>
        </>
    );
}