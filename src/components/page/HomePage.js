import React from 'react';
import Pivot from '../Pivot';
import Navigation from '../Navigation';

export default function HomePage() {
    return (
        <div style={{
            background: 'url(img/clouds.jpg) white fixed center',
            backgroundSize: 'cover',
        }}>
            <Pivot title={['Ryan', 'Vandersmith']} delay={3} caret/>
            <Navigation/>
        </div>
    );
};
