import axios from 'axios'


const GOT_ACTIVE_LEGISLATOR = 'GOT_ACTIVE_LEGISLATOR'

export const gotActiveLegislator = (legislator) => ({
  type: GOT_ACTIVE_LEGISLATOR,
  activeLegislator: legislator
})

export const getActiveLegislator = (id) => {
  return async dispatch => {
    try{
      const {data} = await axios.get(`/api/legislators/${id}`)
      dispatch(gotActiveLegislator(data))
    }
    catch(error){
      console.error(error)
    }
  }
}

export default function (activeLegislator = {}, action){
  switch(action.type){
    case GOT_ACTIVE_LEGISLATOR:
      return action.activeLegislator
    default:
      return activeLegislator
  }
}
