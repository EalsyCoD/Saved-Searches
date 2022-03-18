import React from 'react';
import cl from './Notifications.module.scss'


const Notifications = ({toggle}) => {
    

    return (
        <div className={cl.container}>
            <p className={cl.text}>Notifications</p>
            <label className={cl.label}>
                <input className={cl.input} type="checkbox" onChange={toggle}></input>
                <span className={cl.span} />
            </label>
        </div>
    );
}

export default Notifications;
