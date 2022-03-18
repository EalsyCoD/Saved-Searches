import React from 'react';
import cl from './Header.module.scss'
import Filter from './FilterBar/Filter.js'

const Header = () => {
    return (
        <div className={cl.Container}>
            <text className={cl.text}>Searches</text>
            <Filter />
        </div>
    );
}

export default Header;
