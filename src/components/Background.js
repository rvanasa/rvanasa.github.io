import React from 'react';

export default function Background(props) {

    // let img = new Image();
    // img.src = props.img;

    return (
        // <Parallax bgImage={props.img} style={{
        //     transition: '.2s ease-in-out',
        //     transitionProperty: 'background-position',
        // }} strength={500}>
        //     <div className="h-100 mx-auto pt-4" style={{background: 'rgba(0,0,0,.2)', maxWidth: '600px'}}>
        //         <div>{props.heading}</div>
        //     </div>
        //     {props.children}
        // </Parallax>
        <div style={{
            backgroundImage: `url(${props.img})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="h-100 mx-auto pt-4" style={{background: 'rgba(0,0,0,.2)', maxWidth: '600px'}}>
                <div>{props.heading}</div>
            </div>
            {props.children}
        </div>
    );
}