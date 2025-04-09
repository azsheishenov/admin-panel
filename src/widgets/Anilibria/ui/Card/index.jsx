import React from 'react';

import stl from './index.module.css'
import {NavLink} from "react-router-dom";
import useText from "../../../../shared/hooks/useText.jsx";

const Card = ({item}) => {

    const {getSlicedText} = useText()

    return (
        <NavLink to={item?.alias} className={stl.card}>
            <div className={stl.preview}>
                <img
                    src={`https://anilibria.top/${item?.poster?.src}`}
                    alt={item?.name?.main}
                />
            </div>
            <div className={stl.content}>
                <div className={stl.content__title}>
                    <h3>{item?.name?.main}</h3>
                    <p>{item?.name?.english}</p>
                </div>
                <div className={stl.content__geners}>
                    {item?.genres?.map((genre, idx) => (
                        <span key={idx}>{idx >= 1 ? ` • ${genre?.name}` : genre?.name}</span>
                    ))}
                </div>
                <div className={stl.content__description}>
                    <p>{getSlicedText(item?.description, 0, 500)}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Card;