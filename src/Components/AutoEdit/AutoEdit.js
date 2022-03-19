import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { updateAuto } from '../../ducks/actions/AutoAction.js'
import Modalwindow from '../ModalWindow/ModalWindow.js';
import cl from './AutoEdit.module.scss'
const AutoEdit = (auto, classEdit) => {
    const dispatch = useDispatch()
  
    const [edit, setEdit] = useState({make: '', year: ''})
    const [modal, setModal] = useState(false)

    const handleEdit = (auto) => {
        console.log('edit', auto)
        const makeEdit = {
            ...auto,
            make: edit.make,
            year: edit.year,
            notifications: false,
        }
        dispatch(updateAuto(makeEdit))
        setEdit({make: '', year: ''})
    }
    return (
       <>
        <button onClick={() => {
                        setModal(true)
                    }} className={cl.edit} type="submit">Edit</button>
                    

       <Modalwindow visible={modal} setVisible={setModal}>
        
        <div className={cl.container} onClick={() => {console.log('click auto', auto)}}>
            <button className={cl.button} type="submit" onClick={() => handleEdit(auto.auto)}></button>
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

        </Modalwindow>
       </> 
    );
}

export default AutoEdit;