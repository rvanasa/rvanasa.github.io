import React from 'react';
import {Link} from 'react-router-dom';
import {FaEnvelopeOpen, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter} from 'react-icons/all';
import {Row} from 'react-bootstrap';

const media = [{
    icon: FaGithub,
    color: 'danger',
    link: 'https://github.com/rvanasa',
    style: {opacity: .7},
}, {
    icon: FaTwitter,
    color: 'info',
    link: 'https://twitter.com/rvandersmith',
    style: {opacity: .8},
}, {
    icon: FaEnvelopeOpen,
    color: 'success',
    link: 'mailto:ryanvandersmith@gmail.com',
}, {
    icon: FaLinkedin,
    color: 'primary',
    link: 'https://www.linkedin.com/in/ryan-vandersmith-b59135101/',
}, {
    icon: FaStackOverflow,
    color: 'warning',
    link: 'https://stackoverflow.com/users/6637407',
    style: {opacity: .7},
}];

export default function ContactSection() {

    return (
        <div className="story-page py-4" style={{background: '#0005'}}>
            <Row>
                <div className="col-md-4 col-sm-2">
                </div>
                <div className="col-md-4 col-sm-8">
                    <img className="img-fluid" src={'img/profile.jpg'} alt=""/>
                </div>
                <div className="col-md-4 col-sm-2">
                </div>
            </Row>
            <div className="text-center px-5">
                <hr/>
                <h1 className="text-thin text-light py-2">Ryan Vandersmith</h1>
                <div className="container">
                    {media.map(m => (
                        <Link key={m.link}
                            className={`btn btn-lg px-3 py-3 mb-3 mx-2 btn-outline-${m.color || 'dark'} text-${m.color || 'dark'}`}
                            to={m.link}
                            target="_blank" style={{borderRadius: '50% !important', ...m.style}}>
                            <m.icon size="1.5em"/>
                        </Link>
                    ))}
                </div>
                <hr className="mt-5"/>
            </div>
        </div>
    );
};
