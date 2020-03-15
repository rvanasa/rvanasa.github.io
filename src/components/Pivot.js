import React from 'react';
import {FaAngleDoubleDown, FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/all';

import './Pivot.scss';
import {Link} from 'react-router-dom';

export default function Pivot(props) {
    return (
        <>
            {props.left && (
                    <Link to={props.left.link} className="position-absolute p-5 text-left text-white clickable fade-in"
                          style={{left: 0}}>
                        <h3>{props.left.name}</h3>
                        <FaAngleDoubleLeft size="2em"/>
                    </Link>
            )}
            {props.right && (
                <Link to={props.right.link} className="position-absolute p-5 text-right text-white clickable fade-in"
                      style={{right: 0}}>
                    <h3>{props.right.name}</h3>
                    <FaAngleDoubleRight size="2em"/>
                </Link>
            )}
            <div className="d-flex align-items-center justify-content-center pivot"
                 style={{height: '100vh', background: props.background || '#0003'}}>
                <div className="text-center cursor-default">
                    <hr/>
                    <h1 className="display-2">
                        {props.title && (typeof (props.title) === 'string' ? props.title : props.title.map((part, i) => (
                            <span key={part}
                                  className={`blur delay-${i * props.delay + 1}`}>{(i ? ' ' : '') + part}</span>
                        )))}
                    </h1>
                    {props.name && (
                        <h2>
                            <span className="blur delay-4">Ryan </span>
                            <span className="blur delay-5">Vandersmith</span>
                        </h2>
                    )}
                    <hr/>
                    {props.caret && (
                        <div style={{opacity: .6}}>
                            <div className="fade-in" style={{animationDuration: '3s', paddingTop: '15vh'}}>
                                <FaAngleDoubleDown size="2em" style={{transform: 'scaleX(1.5)'}}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}