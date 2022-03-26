import React from 'react';
import './Item.css'

const item = (props) => {
    // console.log(props)

    const {name, picture} = props.item
    return (
        <div>
            <ol>
                <li className='list-style'><h6>{name}</h6></li>
            </ol>
        </div>
    );
};

export default item;