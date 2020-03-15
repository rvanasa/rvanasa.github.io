import React from 'react';
import ContactSection from '../ContactSection';
import Navigation from '../Navigation';
import Pivot from '../Pivot';

export default function ContactPage() {
    return (
        <div style={{
            background: 'url(img/plane.jpg) white fixed center',
            backgroundSize: 'cover',
        }}>
            <Pivot title={['Let\'s', 'get', 'in', 'Touch.']} caret background={'#0003'}
                   left={{name: 'Projects', link: '/projects'}} right={{name: 'Home', link: '/'}}/>
            <div className="divider bg-success"/>
            <div style={{background: '#000A'}}>
                <ContactSection/>
            </div>
            <Navigation/>
        </div>
    );
}
