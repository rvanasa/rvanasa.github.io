import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaPlay} from 'react-icons/all';
import {NateCollabItem} from './NateCollabItem';

export default function Storytime(props) {
    return (
        <div className="bg-info">
            <Time month="August" year="2017"/>
            <Background img="img/projects/storytime.jpg"
                        heading={<>
                            <h2 className="display-4 text-center mt-4">Storytime</h2>
                            <h3 className="text-center">A procedural choose-your-own-adventure platform.</h3>
                            <hr/>
                            <div className="container pt-5">
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://rvanasa.github.io/storytime"
                                        icon={<FaPlay/>}>
                                        Play Online
                                    </LinkItem>
                                    <LinkItem
                                        url="https://github.com/rvanasa/storytime"
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