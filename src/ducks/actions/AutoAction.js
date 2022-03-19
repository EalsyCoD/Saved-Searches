/* eslint-disable no-unused-vars */
import axios from 'axios'


const initAuto = () => {
    return async (dispatch) => {
      try {
        const res = await axios.get('/autos')
        dispatch({
          type: 'INIT-AUTO',
          payload: res.data,
        })
      } catch (err) {}
    }
  }

const addAuto = (newMake) => {
    return async (dispatch) => {
        try{
            const res = await axios.post('/autos', newMake)
            dispatch({
                type: 'ADD-AUTO',
                payload: res.data
            })
        } catch(err){}
    }
}

const updateAuto = (make) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/autos/${make.id}`)
      dispatch({
        type: 'EDIT-AUTO',
        payload: make.id,
      })
    } catch (err) {}
  }
}

const deleteAuto = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/autos/${id}`)
      dispatch({
        type: 'DELETE-AUTO',
        payload: id,
      })
    } catch (err) {}
  }
}

export { initAuto, addAuto, updateAuto, deleteAuto }