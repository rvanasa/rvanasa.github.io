import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaPlay} from 'react-icons/all';
import {NateCollabItem} from './NateCollabItem';

export default function Skiing(props) {
    return (
        <div style={{background: 'white'}}>
            <Time month="July" year="2017"/>
            <Background img="img/projects/skiing.jpg"
                        heading={<>
                        <h2 className="display-4 text-center">Super Skiing</h2>
                        <h3 className="text-center">Skiing, but you have to individually control each ski.</h3>
                        <hr/>
                        <div className="container pt-5">
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="https://creative.colorado.edu/~ryva9966/skisim/"
                                    icon={<FaPlay/>}>
                                    Play Online
                                </LinkItem>
                                <LinkItem
                                    url="https://github.com/rvanasa/super-skiing"
                                    icon={<FaGithub/>}>
                                    Source Code
                                </LinkItem>
                                <NateCollabItem/>
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </div>
    );
}