import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function NavigationLink(props) {
    const {pathname} = useLocation();

    return (
        <Link className={`clickable text-center ${props.to === pathname ? 'text-info' : 'text-muted'}`}
              style={{color: props.color, background: props.background, flexGrow: 1, flexBasis: 0}}
              to={props.to}>
            <h2 className="mb-0 p-3">
                {props.children}
            </h2>
        </Link>
    );
}