import React, {useState} from 'react';

import './Skill.scss';
import {FaCaretRight, FaFileAlt, FaFolder} from 'react-icons/all';

function Skill(props) {
    let {tree, parent} = props;

    let [toggled, setToggled] = useState(tree.toggle || false);

    if(typeof tree === 'string') {
        tree = {name: tree};
    }

    function onClick(e) {
        e.stopPropagation();

        toggled = !toggled;
        setToggled(toggled);

        if(!tree.parts) {
            props.onToggle(tree, toggled);
        }
    }

    if(Array.isArray(tree)) {
        return (
            <div>
                {tree.map((part, i) => (
                    <div key={i}
                         style={{paddingLeft: '2em'}}>
                        <div className="px-2">
                            <Skill tree={part} parent={parent} onToggle={props.onToggle}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className={`skill ${toggled ? 'toggled' : ''} ${tree.parts ? 'parent' : ''} ${tree.className || ''}`}
             style={{...tree.style}}>
            <h5 className="text-thin pt-0 pb-2 noselect" style={{
                cursor: 'pointer',
                opacity: tree.parts ? (toggled ? .9 : .5) : 1,
            }} onMouseDown={onClick}>
                <span
                    className={`my-2 my-lg-0 pl-2 pr-3 mx-auto mx-lg-0 ${tree.iconClass} ${toggled && !tree.parts ? 'text-info' : 'text-light'}`}>
                    {tree.parts && (
                        <FaCaretRight className="mb-1 mr-1" style={{
                            marginLeft: '-1em',
                            opacity: .5,
                            transform: !toggled && 'rotate(90deg)',
                        }}/>
                    )}
                    {React.createElement(tree.icon || (tree.parts ? FaFolder : FaFileAlt), {className: 'mb-1'})}
                </span>
                {tree.name}
            </h5>
            {!toggled && tree.parts && (
                <div className="mt-2">
                    <Skill tree={tree.parts} parent={tree} onToggle={props.onToggle}/>
                </div>
            )}
        </div>
    );
}

export default Skill;