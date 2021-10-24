import { createStore } from 'redux';

const defaultState = {
    login: '',
    password: '',
    isFetcing: false,
    itemLogin: ''
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INPUT_LOGIN':
            return { ...state, login: action.vid }
        case 'INPUT_PASSWORD':
            return { ...state, password: action.vid }
        default: return state
    }
}

const store = createStore(reducer);

export default store;