import React from 'react';
import {Parallax} from 'react-parallax';
import Pivot from '../Pivot';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {
    FaBroadcastTower,
    FaChartArea,
    FaChild,
    FaCode,
    FaCoffee,
    FaCubes,
    FaDropbox,
    FaGithubAlt,
    FaLanguage,
    FaMap,
    FaMobileAlt,
    FaSlack,
    FaStar,
    FaSuitcase,
    FaUsers
} from 'react-icons/all';
import Sticky from 'react-stickynode';
import Navigation from '../Navigation';

const story = [{
    name: 'Childhood',
    style: 'bg-primary text-white',
    items: [{
        icon: FaChild,
        text: 'Designed intricate toy train systems at a very young age',
    }, {
        icon: FaDropbox,
        text: 'Expertise in building high-fidelity cardboard box forts',
    }, {
        icon: FaBroadcastTower,
        text: 'Family-accredited LEGO set designer and optimizer',
    }],
}, {
    name: 'Development',
    style: 'bg-info text-white',
    items: [{
        icon: FaCubes,
        text: 'Became proficient in Lua in 3rd grade',
    }, {
        icon: FaCoffee,
        text: 'Became proficient in Java in 5th grade',
    }, {
        icon: FaLanguage,
        text: 'Quickly adopted Python, C#, JS/CSS/HTML5, Rust',
    }],
}, {
    name: 'Career',
    style: 'bg-success text-white',
    items: [{
        icon: FaSuitcase,
        text: '<b>4 years</b> interning at Douglas County School District (senior level)',
    }, {
        icon: FaMap,
        text: 'Designed ArcGIS REST services and full-stack applications',
    }, {
        icon: FaUsers,
        text: 'Provided mentorship and guidance to intern teams',
    }, {
        icon: FaStar,
        text: '<b>5 years</b> as a freelance consultant (full-stack web development)',
    }],
}, {
    name: 'Today',
    style: 'bg-dark',
    items: [{
        icon: FaMobileAlt,
        iconClass: 'text-success',
        text: '<b>Progressive Web App</b> development',
        footnote: 'React, Bootstrap, Sass, Node.js, Express, Webpack, Workbox, MongoDB, PostgreSQL',
    }, {
        icon: FaGithubAlt,
        iconClass: 'text-info',
        text: 'Agile & modern software engineering',
        footnote: 'Lean development, Git, continuous integration, release management, virtualization',
    }, {
        icon: FaChartArea,
        iconClass: 'text-muted',
        text: 'Business process <b>design</b> & <b>optimization</b>',
        footnote: 'Technical background with entrepreneurial perspective',
    }, {
        icon: FaCode,
        iconClass: 'text-warning',
        text: 'Modern <b>multi-paradigm</b> languages & frameworks',
        footnote: 'Strong background in Rust and high-performance functional programming',
    }, {
        icon: FaSlack,
        iconClass: 'text-danger',
        text: 'Communicating to <b>technical</b> & <b>business</b> audiences',
        footnote: 'Probably worth emphasizing',
    }],
}];

export default function StoryPage() {
    return (
        <div style={{
            background: 'url(img/rays.jpg) white fixed center',
            backgroundSize: 'cover',
        }}>
            <Pivot title={['A', 'Story']} name caret background={'#0003'}
                   left={{name: 'Home', link: '/'}} right={{name: 'Skills', link: '/skills'}}/>
            <div className="divider bg-info"/>
            <Sticky>
                <div id="story-start">
                    <div className="py-4" style={{background: '#000B'}}>
                        <hr/>
                        <h1 className="text-center text-thin text-glow">Let's start from the beginning.</h1>
                        <hr/>
                    </div>
                    <Parallax bgImage="img/baby.jpg" style={{height: '60vh'}} strength={400}/>
                </div>
            </Sticky>
            <div style={{opacity: .95}}>
                {story.map(category => (
                    <Sticky key={category.name}>
                        <div className={`container py-5 text-center text-lg-left ${category.style}`}>
                            <h1 className="text-thin px-4 mb-3">{category.name}</h1>
                            <ListGroup variant="flush" className="noselect">
                                {category.items.map(item => (
                                    <ListGroupItem key={item.text}>
                                        <div className="w-100">
                                            <h3 className="text-thin pt-2 d-inline">
                                        <span
                                            className={`my-2 my-lg-0 pr-3 mx-auto mx-lg-0 d-block d-lg-inline ${item.iconClass}`}>
                                            <item.icon/>
                                        </span>
                                                <span dangerouslySetInnerHTML={{__html: item.text}}/>
                                            </h3>
                                            <h5 className="text-muted ml-lg-5 mt-3 mt-md-0">{item.footnote}</h5>
                                        </div>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </div>
                    </Sticky>
                ))}
            </div>
            {/*<ContactSection/>*/}
            <Sticky>
                <Navigation/>
            </Sticky>
        </div>
    );
}
