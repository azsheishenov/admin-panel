import React from 'react';

import stl from './index.module.css'

const Card = ({item}) => {
    return (
        <div className={stl.card}>
            <div className={stl.preview}>
                <img
                    src={`https://anilibria.top/${item?.poster?.src}`}
                    alt={item?.name?.main}
                />
            </div>
            <div className={stl.content}>

            </div>
        </div>
    );
};

export default Card;