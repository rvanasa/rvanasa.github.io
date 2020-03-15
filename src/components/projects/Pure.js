import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaMedium, FaMobileAlt} from 'react-icons/all';

export default function Vekta(props) {
    return (
        <>
            <Time month="September" year="2018"/>
            <Background img="img/projects/pure.jpg"
                        heading={<>
                            <div className="mx-2 pt-4" style={{background: '#0002'}}>
                                <h2 className="display-4 text-center mt-4">Platform Pure</h2>
                                <h3 className="text-center">A peer-to-peer education initiative.</h3>
                                <hr/>
                                <div className="container pt-5 pb-3">
                                    <ListGroup variant="flush">
                                        <LinkItem
                                            url="https://platformpure.herokuapp.com"
                                            icon={<FaMobileAlt/>}>
                                            Progressive Web Application
                                        </LinkItem>
                                        <LinkItem
                                            url="https://github.com/rvanasa/pure-webapp"
                                            icon={<FaGithub/>}>
                                            Source Code
                                        </LinkItem>
                                    </ListGroup>
                                </div>
                            </div>
                        </>}>
                <div className="container pt-5" style={{maxWidth: '60em'}}>
                    <div style={{background: '#0004'}}>
                        <ListGroup variant="flush">
                            <LinkItem
                                url="https://medium.com/platform-pure/lets-change-learning-an-educational-paradigm-for-gen-alpha-and-beyond-31fc48c89c4e"
                                icon={<FaMedium/>}>
                                Let's Change Learning - An Educational Paradigm
                            </LinkItem>
                        </ListGroup>
                    </div>
                </div>
            </Background>
        </>
    );
}