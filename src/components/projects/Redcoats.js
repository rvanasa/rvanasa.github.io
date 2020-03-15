import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaPlay} from 'react-icons/all';

export default function Redcoats(props) {
    return (
        <>
            <Time month="February" year="2019"/>
            <Background img="img/projects/redcoats.jpg"
                        heading={<>
                        <h2 className="display-4 text-center mt-4">Cranky Redcoats</h2>
                        <h3 className="text-center">A physics-based, "historically accurate" British colonization
                            simulator.</h3>
                        <hr/>
                        <div className="container pt-5" style={{maxWidth: '60em'}}>
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="http://creative.colorado.edu/~ryva9966/redcoats/"
                                    icon={<FaPlay/>}>
                                    Play Online
                                </LinkItem>
                                {/*<LinkItem*/}
                                {/*    url="https://github.com/rvanasa/redcoats"*/}
                                {/*    icon={<FaGithub/>}>*/}
                                {/*    Source Code*/}
                                {/*</LinkItem>*/}
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </>
    );
}