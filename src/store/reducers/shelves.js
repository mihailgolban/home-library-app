import {
    ADD_NEW_SHELF,
    DELETE_SHELF,
    ADD_BOOK_TO_SHELF,
    SET_ACTIVE_SHELF,
    ADD_REVIEW
} from "../actions/shelves";
import {uuidv4} from "../../utils";

const initialState = {
    shelves: {'all': {name: 'All books', categories: []}},
    selectedShelfId: 'all',
    books: [],
    shelfReviews: []
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
            shelves: newShelves,
            books: state.books.filter(book => {
                const {shelfId} = book;
                return payload !== shelfId;
            }),
            shelfReviews: state.shelfReviews.filter(shelf => {
                const {shelfId} = shelf;
                return payload !== shelfId;
            })
        }
    }

    if (type === SET_ACTIVE_SHELF) {
        return {
            ...state,
            selectedShelfId: payload
        }
    }

    if (type === ADD_REVIEW) {
        const {shelfId, review} = payload;
        return {
            ...state,
            shelfReviews: [...state.shelfReviews, {shelfId, review}]
        }
    }

    return state;
}
