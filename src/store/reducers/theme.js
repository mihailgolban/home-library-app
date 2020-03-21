import {SET_THEME} from "../actions/theme";

const initialState = {
    theme: 'light'
};

export default function (state = initialState, {type, payload=null}) {
    if (type === SET_THEME) {
        return {
            ...state,
            theme: payload
        }
    }
    return state;
}
