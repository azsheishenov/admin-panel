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
                <div>
                    <h3>{item?.name?.main}</h3>
                    <p>{item?.name?.english}</p>
                </div>
                <div>
                    {item?.genres?.map((genre) => (
                        <>
                            <span></span>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;