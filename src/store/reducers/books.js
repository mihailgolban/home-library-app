import {GET_BOOK_DETAILS, GET_BOOK_LIST, ADD_REVIEW} from "../actions/books";

const initialState = {
    books: [],
    bookDetails: {},
    bookReviews: []
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
    if (type === ADD_REVIEW) {
        const {bookId, review} = payload;
        console.log('reducer book', [...state.bookReviews, {bookId, review}]);
        return {
            ...state,
            bookReviews: [...state.bookReviews, {bookId, review}]
        }
    }
    return state;
}
