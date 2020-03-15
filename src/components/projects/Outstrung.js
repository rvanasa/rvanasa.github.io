import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaChalkboard, FaDownload} from 'react-icons/all';

export default function Outstrung(props) {
    return (
        <div style={{background: 'black'}}>
            <Time month="February" year="2016"/>
            <Background img="img/projects/outstrung.jpg"
                        heading={<>
                        <h2 className="display-4 text-center mt-4">Outstrung</h2>
                        <h3 className="text-center">A challenging sci-fi adventure.</h3>
                        <h4 className="text-center text-warning mt-4">
                            Second Place: Game & Simulation Programming
                        </h4>
                        <h4 className="text-center text-warning">
                            CO FBLA State Leadership Conference
                        </h4>
                        <hr/>
                        <div className="container pt-5" style={{maxWidth: '60em'}}>
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="https://drive.google.com/open?id=1RLkOkfjac29wgKaVXv26muWLIWLoK52u"
                                    icon={<FaDownload/>}>
                                    Download
                                </LinkItem>
                                <LinkItem
                                    url="https://docs.google.com/presentation/d/1wnDIUyC5yEeWhtVdDE7q0ssHiriZ-kLUANFezfq602k/edit?usp=sharing"
                                    icon={<FaChalkboard/>}>
                                    COSLC Presentation
                                </LinkItem>
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </div>
    );
}