import {
    ADD_NEW_SHELF,
    DELETE_SHELF,
    ADD_BOOK_TO_SHELF,
    SET_ACTIVE_SHELF
} from "../actions/shelves";
import {uuidv4} from "../../utils";

const initialState = {
    shelves: [],
    selectedShelfId: '',
    books: []
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

    if (type === ADD_BOOK_TO_SHELF) {
        const {shelfId, bookId, book} = payload;
        console.log(state.books);
        const books = state.books;
        books.push({bookId, shelfId, bookDetails: book});
        return {
            ...state,
            books: books
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

    if (type === SET_ACTIVE_SHELF) {
        return {
            ...state,
            selectedShelfId: payload
        }
    }

    return state;
}
