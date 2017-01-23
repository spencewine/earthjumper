

import api from '../../database/api'


const initialState = {
  mapCoords: [],
  wikiPage: [],
  wikiText: []
}


const RECEIVE_LOCATION = 'RECEIVE_LOCATION'

/*-----action-creator locatoin-----*/
export const receiveLocation = (mapCoords) =>{
  return {
    type: RECEIVE_LOCATION,
    mapCoords
  }
}

const RECEIVE_WIKI = 'RECEIVE_WIKI'

/*-----action-creator locatoin-----*/
export const receiveWiki = (wikiPage, wikiText) =>{
  return {
    type: RECEIVE_WIKI,
    wikiPage,
    wikiText
  }
}

export const randomWiki = () =>
  dispatch =>
    api.getRandom()
      .then(([wiki, coords]) => {
        dispatch(receiveWiki(wiki[1][0], wiki[2][0]));
        dispatch(receiveLocation(coords))
      })

export const getWiki = (url) => dispatch=>{
    api.getWikis(url)
      .then(res=>{
        console.log("RES", res)
      return dispatch(receiveWiki(res[1][0], res[2][0]))
    })
    .catch(e=>console.log(e))
  }


export const getCoords = (coords) =>dispatch=>{
    api.getCoords(coords)
    .then(res=>{
      console.log("RESCOORDS", res)
      return dispatch(receiveLocation(res))
    })
      .catch(e=>console.log(e))
  }





export default function(state = initialState, action) {
    let newState = Object.assign({}, state)
    let index;
    switch (action.type) {
        case RECEIVE_LOCATION:
            newState.mapCoords =  action.mapCoords.results[0].geometry;
            break;

        case RECEIVE_WIKI:
            newState.wikiPage =  action.wikiPage;
            newState.wikiText = action.wikiText
            break;

        default:
            return state;
    }
    return newState;
}
