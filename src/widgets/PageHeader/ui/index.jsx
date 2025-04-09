import React from 'react';

import stl from './index.module.css'

const PageHeader = ({title, children}) => {
    return (
        <div className={stl.wrapper}>
            <h1 className={stl.title}>{title}</h1>

            {children}
        </div>
    );
};

export default PageHeader;