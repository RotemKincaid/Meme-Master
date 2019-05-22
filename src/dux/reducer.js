const initialState = {
    gamePin: '',
    users: []
}


const SET_GAME_PIN = 'SET_GAME_PIN'
const SET_USER = 'SET_USER'

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_GAME_PIN:
            return {...state, gamePin: action.payload}
        case SET_USER:
            return {...state, users: [...state.users, action.payload]}
        default: 
            return state
    }
}

export function setGamePin(gamePin){
    return {
        type: SET_GAME_PIN,
        payload: gamePin
    }
}

export function setUser(username){
    return {
        type: SET_USER,
        payload: username
    }
}