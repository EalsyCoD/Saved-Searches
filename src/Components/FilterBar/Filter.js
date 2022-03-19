import React from 'react';
import cl from './Filter.module.scss'
const Filter = () => {
    return (
        <div className={cl.Container}>
            <input type="text" placeholder={'Year'}></input>    
        </div>
    );
}

export default Filter;
