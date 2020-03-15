import React from 'react';

import Background from '../Background';
import Time from '../Time';
import {ListGroup} from 'react-bootstrap';
import LinkItem from '../LinkItem';
import {FaGithub, FaReddit, FaSteam} from 'react-icons/all';

export default function RimCities(props) {
    return (
        <div className="bg-dark" style={{minHeight: '100vh'}}>
            <Time month="March" year="2020"/>
            <Background img="img/projects/rimcities.jpg"
                        heading={<>
                            <h2 className="display-4 text-center mt-4">RimCities</h2>
                            <h3 className="text-center">A procedural city generator.</h3>
                            <h4 className="text-center text-warning mt-4">Over 70,000 Downloads on Steam</h4>
                            <hr/>
                            <div className="container pt-5" style={{maxWidth: '60em'}}>
                                <ListGroup variant="flush">
                                    <LinkItem
                                        url="https://steamcommunity.com/sharedfiles/filedetails/?id=1775170117"
                                        icon={<FaSteam/>}>
                                        Steam Workshop
                                    </LinkItem>
                                    <LinkItem
                                        url="https://www.reddit.com/r/RimWorld/comments/c2odfh/10_rimcities_beta_release_procedural_city_map/"
                                        icon={<FaReddit/>}>
                                        Announcement Thread
                                    </LinkItem>
                                    <LinkItem
                                        url="https://github.com/rvanasa/rimworld-cities"
                                        icon={<FaGithub/>}>
                                        Source Code
                                    </LinkItem>
                                </ListGroup>
                            </div>
                        </>}>
            </Background>
        </div>
    );
}