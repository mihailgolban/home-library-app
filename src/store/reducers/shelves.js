import {
    ADD_NEW_SHELF,
    DELETE_SHELF,
    ADD_BOOK_TO_SHELF
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
        newShelves[shelfId] = {name: name, categories: categories, books:[]};
        return {
            ...state,
            shelves: newShelves
        }
    }

    if (type === ADD_BOOK_TO_SHELF) {
        const {shelfId, bookId, book} = payload;
        const newShelves = Object.assign({}, state.shelves);
        newShelves[shelfId].books[bookId] = book;
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
