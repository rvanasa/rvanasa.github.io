import React from 'react';

export default function Time(props) {
    return (
        <div className="bg-warning px-4 py-3">
            <h4 className="float-right">{props.year}</h4>
            <h5 className="mb-1">{props.month}</h5>
        </div>
    );
}