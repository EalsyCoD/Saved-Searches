import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { updateAuto } from '../../ducks/actions/AutoAction.js'
import cl from './AutoEdit.module.scss'
const AutoEdit = () => {
    const dispatch = useDispatch()
  
    const [edit, setEdit] = useState({make: '', year: ''})

    const handleEdit = () => {
        const makeEdit = {
            make: edit.make,
            year: edit.year,
            notifications: false,
        }
        dispatch(updateAuto(makeEdit))
        setEdit({make: '', year: ''})
    }
    return (
       <>
        <div className={cl.container}>
            <button className={cl.button} type="submit" onClick={handleEdit}></button>
            <input className={cl.input} type="text" value={edit.make} onChange={e => setEdit({
                ...edit, make: e.target.value
            })} placeholder={"Entry new auto name!"}
            >
            </input>
            <div className={cl.inputyear}>
            <input className={cl.input1} type="text" value={edit.year} onChange={e => setEdit({
                ...edit, year: e.target.value
            })}
                placeholder={"Entry new auto year!"}
            >
            </input>
            </div>
        </div>
       </> 
    );
}

export default AutoEdit;