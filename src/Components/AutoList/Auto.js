import React from 'react';
import { useDispatch ,useSelector } from 'react-redux'
import cl from './AutoList.module.scss'
import img from '../../images/Vector.svg'
import deleteimg from '../../images/delete.svg'
import Notifications from '../Notifications/Notifications.js'

import { deleteAuto } from '../../ducks/actions/AutoAction.js'

const Auto = ({toggle}) => {
    const dispatch = useDispatch()
    const autos = useSelector((state) => {
        return state.autos.autos
    })

    const handleDelete = (id) => {
        dispatch(deleteAuto(id))
    }

    return (
        <>
        <div className={cl.make}>
           <div className={cl.tdoby}>
               {autos.map((make,i) => (
                   <div key={i}>
                      <div className={cl.td}>
                    </div> 
                    <div className={cl.all}>
                    <h1 className={cl.tdname}>{make.make} {make.year}</h1>
                    <img className={cl.img} src={img} alt="img"></img>
                    </div>
                    <div className={cl.tot}>
                    <p className={cl.totallots}>256</p>
                    <p className={cl.totalchange}>256</p>
                    </div>
                    <Notifications toggle={toggle} />
                    <div className={cl.btn}>
                    <button className={cl.open} type="submit">Open</button>
                    </div>
                    <div className={cl.btnedit}>
                    <button className={cl.edit} type="submit">Edit</button>
                    </div>
                    <div className={cl.deleteimgD}>
                        <img onClick={() => {
                            handleDelete(make.id)
                        }} src={deleteimg} alt="delete"></img>
                    </div>
                   </div>
               ))}
           </div>
           </div>
           </>
    );
}

export default Auto;
