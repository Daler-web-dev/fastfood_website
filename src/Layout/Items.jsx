import React from 'react';
const Items = ({ i }) => {
    return (
        <div className=' px-2 py-2 shadow-md flex items-center rounded-2xl'>
            <img src={i.img} />
            <p>{i.name}</p>
        </div>
    );
}

export default Items;