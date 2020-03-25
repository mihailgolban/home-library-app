import Api from "../../Api";
import {getToastr} from "../../utils";

export const GET_BOOK_LIST = 'GET_BOOK_LIST';
export const GET_BOOK_DETAILS = 'GET_BOOK_DETAILS';
export const ADD_REVIEW = 'books/ADD_REVIEW';
export const SEARCH_BOOK = 'SEARCH_BOOK';

export function getBooks(subject, parameters) {
    return (dispatch, getState) => {
        const cachedBooks = getState().booksReducer.books;
        if (Array.isArray(cachedBooks) && cachedBooks.length) return new Promise(res => res());
        return Api.getBooks(subject, parameters)
            .then(({data}) => {
                if (data.works) {
                    dispatch({
                        type: GET_BOOK_LIST,
                        payload: data.works.filter(book => book['cover_edition_key'] !== undefined)
                    });
                }
            })
            .catch(e => {
                getToastr().error('Server Error: Something went wrong. Please try again.');
                console.log(e);
            });
    }
}

export function getBookDetails(bookId) {
    return (dispatch, getState) => {
        const cachedBookDetails = getState().booksReducer.bookDetails;
        if (cachedBookDetails[bookId]) return new Promise(res => res()) ;
        return Api.getBookById(bookId)
            .then(({data}) => {
                const olId = `OLID:${bookId}`;
                if (data[olId]) {
                    dispatch({
                        type: GET_BOOK_DETAILS,
                        payload: {bookId, olId, data}
                    })
                }
            })
            .catch(e => {
                getToastr().error('Server Error: Something went wrong. Please try again.');
                console.log(e);
            });
    }
}

export function addReview(bookId, review) {
    return {
        type: ADD_REVIEW,
        payload: {bookId, review}
    }
}

export function searchBook(title) {
    return dispatch => {
        return Api.searchBook(title)
            .then(({data}) => {
                dispatch({
                    type: SEARCH_BOOK,
                    payload: data.docs.filter(book => book['cover_edition_key'] !== undefined)
                })
            })
            .catch(e => {
                getToastr().error('Server Error: Something went wrong. Please try again.');
                console.log(e)
            });
    }
}
