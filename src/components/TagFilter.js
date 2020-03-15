import React from 'react';

export default function TagFilter(props) {
    return (!props.from || !props.options.includes(props.from)) && props.children;
}