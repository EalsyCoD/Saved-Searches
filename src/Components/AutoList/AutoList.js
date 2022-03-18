import React from 'react';
import cl  from './AutoList.module.scss'


import Auto from './Auto.js'
const Autolist = () => {
    return (
        <>
        <div className={cl.Container}>
            <div className={cl.main}>
            <p className={cl.total}>TOTAL LOTS</p>
            <p className={cl.changes}>CHANGES</p>
            </div>
            <div className={cl.linestyle}>
            <hr className={cl.line}></hr>
            </div>
           <Auto />
        </div>
        </>
    );
}

export default Autolist;
