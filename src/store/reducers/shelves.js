import {
    ADD_NEW_SHELF,
    RENAME_SHELF,
    DELETE_SHELF
} from "../actions/shelves";
import {uuidv4} from "../../utils";

const initialState = {
    shelves: []
};

export default function (state = initialState, {type, payload = null}) {
    if (type === ADD_NEW_SHELF) {
        const {name, categories} = payload;
        const newShelves = Object.assign({}, state.shelves);
        const shelfId = uuidv4();
        newShelves[shelfId] = {name: name, categories: categories};
        return {
            ...state,
            shelves: newShelves
        }
    }

    if (type === RENAME_SHELF) {
        const {shelfId, newName} = payload;
        const newShelves = Object.assign({}, state.shelves);
        if (newShelves[shelfId] && newShelves[shelfId].name) {
            newShelves[shelfId].name = newName;
        }

        return {
            ...state,
            shelves: newShelves
        }
    }

    if (type === DELETE_SHELF) {
        const newShelves = Object.assign({}, state.shelves);
        delete newShelves[payload];
        return {
            ...state,
            shelves: newShelves
        }
    }

    return state;
}
