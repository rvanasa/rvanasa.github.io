import React from 'react';

import {ListGroup} from 'react-bootstrap';

export default function LinkItem(props) {
    return (
        <ListGroup.Item className="clickable"
                        style={{transformOrigin: 'left'}}
                        action
                        onClick={() => props.url && window.open(props.url)}>
            <h4 className="my-1">
                <span className="ml-2" style={{position: 'relative', bottom: '.1em'}}>{props.icon}</span>
                <span className="ml-3 d-inline-block">{props.children}</span>
            </h4>
        </ListGroup.Item>
    );
}