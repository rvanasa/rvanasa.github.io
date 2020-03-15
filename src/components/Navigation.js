import React from 'react';
import NavigationLink from './NavigationLink';

export default function Navigation() {
    return (
        <>
            <div className="d-md-flex align-items-stretch justify-content-around flex-wrap" style={{
                background: '#181818F8',
            }}>
                <NavigationLink to="/story">Story</NavigationLink>
                <NavigationLink to="/skills">Skills</NavigationLink>
                <NavigationLink to="/projects">Projects</NavigationLink>
                <NavigationLink to="/contact">Contact</NavigationLink>
            </div>
            <div className="py-1 bg-primary"/>
        </>
    );
};
