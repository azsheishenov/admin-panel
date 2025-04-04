import React from 'react';
import {InputText} from 'primereact/inputtext';
import {FloatLabel} from "primereact/floatlabel";

import stl from './index.module.css'

const Search = () => {
    return (
        <FloatLabel className={stl.wrapper}>
            <InputText className={stl.input} id="search"/>
            <label htmlFor="search">Поиск по каталогу</label>
        </FloatLabel>
    );
};

export default Search;