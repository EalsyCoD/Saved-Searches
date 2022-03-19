import React, { useState } from 'react';
import cl from './Header.module.scss'
import Filter from '../FilterBar/Filter.js'
import AutoAdd from '../AutoAdd/AutoAdd.js'
import ModalWindow from '../ModalWindow/ModalWindow.js'
const Header = () => {

    const [modal, setModal] = useState(false)
    
    return (
        <div className={cl.Container}>
            <button className={cl.button} onClick={() => setModal(true)}>ADD AUTO</button>
            <ModalWindow visible={modal} setVisible={setModal}>
            <AutoAdd />
            </ModalWindow>
            <Filter />
        </div>
    );
}

export default Header;
