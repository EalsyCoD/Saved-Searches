// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux'
// import { updateAuto } from '../../ducks/actions/AutoAction.js'
// import cl from './AutoEdit.module.scss'
// const AutoEdit = () => {
//     const dispatch = useDispatch()
//     const [value, setValue] = useState('')
//     const [value2, setValue2] = useState('')

//     const handleEdit = () => {
//         const make = {
//             make: value,
//             year: value2,
//             notifications: false,
//         }
//         dispatch(updateAuto(make))
//         setValue('')
//         setValue2('')
//     }

//     return (
//        <>
//         <div className={cl.container}>
//             <button className={cl.button} type="submit" onClick={handleEdit}></button>
//             <input className={cl.input} type="text" value={value} onChange={(event) => {
//                 setValue(event.target.value)
//             }} placeholder={"Entry new auto name!"}
//             >
//             </input>
//             <div className={cl.inputyear}>
//             <input className={cl.input1} type="text" value={value2} onChange={(event) => {
//                 setValue2(event.target.value)
//             }} placeholder={"Entry new auto year!"}
//             >
//             </input>
//             </div>
//         </div>
//        </> 
//     );
// }

// export default AutoEdit;