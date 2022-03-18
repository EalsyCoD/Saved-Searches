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

const addAuto = (newAuto) => {
    return async (dispatch) => {
        try{
            const res = await axios.post('/autos', newAuto)
            dispatch({
                type: 'ADD-AUTO',
                payload: res.data
            })
        } catch(err){}
    }
}

export { initAuto, addAuto }