import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaMedium, FaReddit, FaTerminal} from 'react-icons/all';

export default function FunQy(props) {
    return (
        <div className="bg-primary" style={{background: 'black'}}>
            <Time month="May" year="2018"/>
            <Background img="img/projects/funqy.jpg"
                        heading={<>
                            <h2 className="display-4 text-center mt-4">FunQy</h2>
                            <h3 className="text-center">A high-level quantum/classical programming language.</h3>
                            <hr/>
                            <div className="container pt-5 pb-3" style={{maxWidth: '60em'}}>
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://funqy.herokuapp.com"
                                        icon={<FaTerminal/>}>
                                        Online Interpreter
                                    </LinkItem>
                                    <LinkItem
                                        url="https://github.com/rvanasa/funqy"
                                        icon={<FaGithub/>}>
                                        Source Code
                                    </LinkItem>
                                </ListGroup>
                            </div>
                        </>}>
                <div className="container pt-5" style={{maxWidth: '60em'}}>
                    <ListGroup variant="flush">
                        <LinkItem
                            url="https://medium.com/@ryanvandersmith/how-to-make-quantum-mechanics-contradict-itself-using-ibm-q-experience-d4ac4c8ce1da"
                            icon={<FaMedium/>}>
                            FunQy implementation of the Frauchiger-Renner Paradox
                        </LinkItem>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <LinkItem
                            url="https://www.reddit.com/r/QuantumComputing/comments/aiq0j9/i_used_my_quantum_programming_language_to/"
                            icon={<FaReddit/>}>
                            Frauchiger-Renner Paradox Follow-up Discussion
                        </LinkItem>
                    </ListGroup>
                </div>
            </Background>
        </div>
    );
}