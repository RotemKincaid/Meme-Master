const initialState = {
  gamePin: "",
  username: "",
  gameObject: {},
  socket: "",
  creator: "",
  // players: '',
};

const SET_GAME_PIN = "SET_GAME_PIN";
const SET_PLAYER_USERNAME = "SET_PLAYER_USERNAME";

const SET_GAME_OBJECT = "SET_GAME_OBJECT";
const SET_SOCKET = "SET_SOCKET";
const SET_CREATOR = "SET_CREATOR";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_PIN:
      return { ...state, gamePin: action.payload };

    case SET_PLAYER_USERNAME:
      // const newPlayersList = state.players.push(action.payload)
      return { ...state, username: action.payload };

    
    case SET_GAME_OBJECT:
      // const newPlayersList = state.players.push(action.payload)
      return { ...state, gameObject: action.payload };
    case SET_SOCKET:
      // const newPlayersList = state.players.push(action.payload)
      return { ...state, socket: action.payload };
    case SET_CREATOR:
      // const newPlayersList = state.players.push(action.payload)
      return { ...state, creator: action.payload };

    default:
      return state;
  }
}

export function setGamePin(gamePin) {
  return {
    type: SET_GAME_PIN,
    payload: gamePin
  };
}

export function setPlayerUsername(username) {
  return {
    type: SET_PLAYER_USERNAME,
    payload: username
  };
}



export function setGameObject(gameObject) {
  return {
    type: SET_GAME_OBJECT,
    payload: gameObject
  };
}

export function setSocket(socket) {
  return {
    type: SET_SOCKET,
    payload: socket
  };
}
export function setCreator(boolean) {
  return {
    type: SET_CREATOR,
    payload: boolean
  };
}
