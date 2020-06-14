import axios from 'axios'


const GOT_ALL_LEGISLATORS = 'GOT_ALL_LEGISLATORS'

export const gotAllLegislators = (legislators) => ({
  type: GOT_ALL_LEGISLATORS,
  legislators
})

export const getAllLegislators = (addressString) => {
  return async dispatch => {
    try{
      const {data} = await axios.get('/api/legislators', {
    params: {
      address: addressString
    }})
      dispatch(gotAllLegislators(data))
    }
    catch(error){
      console.error(error)
    }
  }
}

export default function (legislators = [], action){
  switch(action.type){
    case GOT_ALL_LEGISLATORS:
      return action.legislators
    default:
      return legislators
  }
}
