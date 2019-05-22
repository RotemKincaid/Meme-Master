const initialState = {
    gamePin: '',
    username: '',
    avatar_url: ''
    // players: '',
    
}

const SET_GAME_PIN = 'SET_GAME_PIN'
const SET_PLAYER_USERNAME = 'SET_PLAYER_USERNAME'
const SET_AVATAR_URL = 'SET_AVATAR_URL'


export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_GAME_PIN:
            return {...state, gamePin: action.payload}

        case SET_PLAYER_USERNAME:
            // const newPlayersList = state.players.push(action.payload)
            return {...state, username: action.payload}

        case SET_AVATAR_URL:
            // const newPlayersList = state.players.push(action.payload)
            return {...state, avatar_url: action.payload}
        
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

export function setAvatarUrl(avatar_url){
    return {
        type: SET_AVATAR_URL,
        payload: avatar_url
    }
}


