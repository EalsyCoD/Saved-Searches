import React from 'react';
import cl from './Header.module.scss'
import Filter from './FilterBar/Filter.js'

const Header = () => {
    return (
        <div className={cl.Container}>
            <h1 className={cl.text}>Searches</h1>
            <Filter />
        </div>
    );
}

export default Header;
