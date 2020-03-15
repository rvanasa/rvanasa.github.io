import {FaHandshake} from 'react-icons/all';
import LinkItem from '../LinkItem';
import React from 'react';

const style = {
    opacity: .8,
};

export function NateCollabItem() {
    return (
        <LinkItem
            url="https://natestgeorge.com/"
            icon={<span style={style}><FaHandshake/></span>}>
            <span style={style}>Nate St. George</span>
        </LinkItem>
    );
}