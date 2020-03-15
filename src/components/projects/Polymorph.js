import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaMedium, FaPython} from 'react-icons/all';

export default function Polymorph(props) {
    return (
        <div className="bg-success">
            <Time month="October" year="2019"/>
            <Background img="img/projects/polymorph.jpg"
                        heading={<>
                        <h2 className="display-4 text-center mt-4">Polymorph</h2>
                        <h3 className="text-center">A powerful universal data structure based on abstract algebra.</h3>
                        <hr/>
                    </>}>
                <div className="container pt-5" style={{maxWidth: '60em'}}>
                    <ListGroup variant="flush">
                        <LinkItem
                            url="https://colab.research.google.com/drive/1ik4qjJugiQ-C_FWRCHPPllADZuxWsMHS"
                            icon={<FaPython/>}>
                            Semantic Polymorphism in a Free Commutative Magma over &#8469;
                        </LinkItem>
                        <LinkItem
                            url="https://medium.com/@ryanvandersmith/semantic-polymorphism-explaining-abstract-concepts-using-buttons-tape-and-string-12e674949942?source=friends_link&sk=438556c384ff5690279c69cee7375618"
                            icon={<FaMedium/>}>
                            Explaining Semantic Polymorphism with Buttons and String
                        </LinkItem>
                    </ListGroup>
                </div>
            </Background>
        </div>
    );
}