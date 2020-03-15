import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaMobileAlt, FaNewspaper} from 'react-icons/all';

export default function SIO(props) {
    return (
        <div className="bg-primary">
            <Time month="Academic Year" year="2016"/>
            <Background img="img/projects/sio.jpg"
                        heading={<>
                        <div className="mx-2 py-4" style={{background: '#0006'}}>
                            <h2 className="display-4 text-center mt-4">School in One</h2>
                            <h3 className="text-center">Verizon Innovative App Challenge 2016</h3>
                            <h4 className="text-center text-warning mt-4">
                                Best in State, Best in Region (national finalist)
                            </h4>
                            <h4 className="text-center text-warning">Awarded $5,000 technology department grant</h4>
                        </div>
                        <hr/>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/AFoM32Ztl74"
                                    title="School in One"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>
                        <hr/>
                        <div className="container" style={{maxWidth: '60em'}}>
                            <ListGroup variant="flush">
                                <LinkItem
                                    url="http://schoolinone.herokuapp.com/"
                                    icon={<FaMobileAlt/>}>
                                    Live Webapp
                                </LinkItem>
                                <LinkItem
                                    url="https://www.dcsdk12.org/about/our_district/news_archive/rock_canyon_wins_in_verizon_app_challenge"
                                    icon={<FaNewspaper/>}>
                                    DCSD News Article
                                </LinkItem>
                                <LinkItem
                                    url="https://www.9news.com/article/news/education/local-students-create-award-winning-homework-app/73-282472330"
                                    icon={<FaNewspaper/>}>
                                    9NEWS Article
                                </LinkItem>
                            </ListGroup>
                        </div>
                    </>}>
            </Background>
        </div>
    );
}