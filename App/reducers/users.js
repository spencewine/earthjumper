

const initialState = {
    userInfo: {},

}

/* ------ actions ------- */

const SET_USER_INFO = 'SET_USER_INFO';

/* ------ action creators ------ */
const setUserInfo = userInfo => ({ type: SET_USER_INFO, userInfo});


/* ------  set user info reducer ------ */
export default function setUserInfoReducer (prevState = initialState, action){
    let nextState = Object.assign({}, prevState);
    switch(action.type){
        case SET_USER_INFO:
            nextState.userInfo = action.userInfo;
            return nextState;


        default:
            return prevState;
    }
};

/* ------ dispatchers ------- */


/* get user basic info */
export const getUserInfo = (id) => dispatch => {
  return fetch(`/api/userProfile/${id}`)
    .then((res)=> {
        console.log(`retrieving user info: ${JSON.stringify(res)}`)
        dispatch(setUserInfo(res.data))
    })
    .catch( err => console.error(`setting user info unsuccessful: ${err}`));
};
