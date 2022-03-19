import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addAuto } from '../../ducks/actions/AutoAction.js'
import cl from './AutoAdd.module.scss'
const Autoadd = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')

    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    //   }
      
    const handleAdding = () => {
        const newMake = {
            make:value,
            year: value2,
            notifications: false,
        }
        dispatch(addAuto(newMake))
        setValue('')
        setValue2('')
    }

    return (
       <>
        <div className={cl.container}>
            <button className={cl.button} type="submit" onClick={handleAdding}></button>
            <input className={cl.input} type="text" value={value} onChange={(event) => {
                setValue(event.target.value)
            }} placeholder={"Entry auto name!"}
            >
            </input>
            <div className={cl.inputyear}>
            <input className={cl.input1} type="text" value={value2} onChange={(event) => {
                setValue2(event.target.value)
            }} placeholder={"Entry auto year!"}
            >
            </input>
            </div>
        </div>
       </> 
    );
}

export default Autoadd;
