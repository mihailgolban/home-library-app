import {GET_BOOK_DETAILS, GET_BOOK_LIST} from "../actions/books";

const initialState = {
    books: [],
    bookDetails: {}
};

export default function (state = initialState, {type, payload = null}) {
    if (type === GET_BOOK_LIST) {
        return {
            ...state,
            books: payload
        }
    }
    if (type === GET_BOOK_DETAILS) {
        const {bookId, olId, data} = payload;
        const newBookDetails = state.bookDetails;
        newBookDetails[bookId] = data[olId];
        return {
            ...state,
            bookDetails: newBookDetails
        }
    }
    return state;
}
