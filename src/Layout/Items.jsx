import React from 'react';
const Items = ({ i }) => {
    return (
        <a href={`#` + i.type}>
            <div className=' px-2 py-2 shadow-md flex items-center rounded-2xl'>
            <img src={i.img} />
            <p>{i.name}</p>
        </div>
        </a>
    );
}

export default Items;