import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaChalkboard} from 'react-icons/all';

export default function FurryFriends(props) {
    return (
        <div style={{background: 'black'}}>
            <Time month="May" year="2015"/>
            <Background img="img/projects/furry-friends.jpg"
                        heading={<>
                        <div className="mx-2 py-4" style={{background: '#0006'}}>
                            <h2 className="display-4 text-center mt-4">Furry Friends</h2>
                            <h3 className="text-center">A helpful software suite for animal shelter management.</h3>
                            <h4 className="text-center text-warning mt-4">
                                Top 10 Finalist: Desktop Application Programming
                            </h4>
                            <h4 className="text-center text-warning">
                                FBLA National Leadership Conference
                            </h4>
                        </div>
                        <hr/>
                        <div className="container pt-5" style={{maxWidth: '60em'}}>
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="https://docs.google.com/presentation/d/1MNfi5BtC4YjQZyDckBNZW3XJnIFU8yB8DxTS62XEB_Y/edit?usp=sharing"
                                    icon={<FaChalkboard/>}>
                                    USNLC Presentation
                                </LinkItem>
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </div>
    );
}