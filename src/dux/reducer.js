const initialState = {
    gamePin: '',
    username: ''
    
}

const SET_GAME_PIN = 'SET_GAME_PIN'
const SET_PLAYER_USERNAME = 'SET_PLAYER_USERNAME'


export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_GAME_PIN:
            return {...state, gamePin: action.payload}

        case SET_PLAYER_USERNAME:
            return {...state, username: action.payload}
        
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

export function setPlayerUsername(username){
    return {
        type: SET_PLAYER_USERNAME,
        payload: username
    }
}


