import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaBookOpen, FaGithub, FaTerminal} from 'react-icons/all';
import {HammerCollabItem} from './HammerCollabItem';

export default function Fungi(props) {
    return (
        <div className="bg-primary" style={{background: 'black'}}>
            <Time month="March" year="2018"/>
            <Background img="img/projects/fungi.jpg"
                        heading={<>
                            <h2 className="display-4 text-center mt-4">Human-Fungi Interface</h2>
                            <h3 className="text-center">The official web interface for the Fungi programming language.</h3>
                            <hr/>
                            <div className="container pt-5 pb-3" style={{maxWidth: '60em'}}>
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://fungi-lang.herokuapp.com"
                                        icon={<FaTerminal/>}>
                                        Online Interpreter
                                    </LinkItem>
                                    <LinkItem
                                        url="https://github.com/Adapton/fungi"
                                        icon={<FaGithub/>}>
                                        Source Code
                                    </LinkItem>
                                </ListGroup>
                            </div>
                        </>}>
                <div className="container pt-5" style={{maxWidth: '60em'}}>
                    <ListGroup variant="flush">
                        <LinkItem
                            url="https://arxiv.org/pdf/1808.07826.pdf"
                            icon={<FaBookOpen/>}>
                            Typed Incremental Computation with Names
                        </LinkItem>
                        <HammerCollabItem/>
                    </ListGroup>
                </div>
            </Background>
        </div>
    );
}