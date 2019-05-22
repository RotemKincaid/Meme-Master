const initialState = {
    gamePin: 'empty',
    
}

const SET_GAME_PIN = 'SET_GAME_PIN'


export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_GAME_PIN:
            return {...state, gamePin: action.payload}
        
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


