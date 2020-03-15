import {FaHandshake} from 'react-icons/all';
import LinkItem from '../LinkItem';
import React from 'react';

const style = {
    opacity: .8,
};

export function HammerCollabItem() {
    return (
        <LinkItem
            url="https://arxiv.org/search/cs?searchtype=author&query=Hammer%2C+M+A"
            icon={<span style={style}><FaHandshake/></span>}>
            <span style={style}>Dr. Matthew Hammer</span>
        </LinkItem>
    );
}