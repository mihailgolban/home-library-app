import Api from "../../Api";

export const GET_BOOK_LIST = 'GET_BOOK_LIST';
export const GET_BOOK_DETAILS = 'GET_BOOK_DETAILS';
export const ADD_REVIEW = 'books/ADD_REVIEW';

export function getBooks(subject, parameters) {
    return (dispatch, getState) => {
        const cachedBooks = getState().booksReducer.books;
        if (Array.isArray(cachedBooks) && cachedBooks.length) return new Promise(res => res());
        return Api.getBooks(subject, parameters)
            .then(({data}) => {
                if (data.works) {
                    dispatch({
                        type: GET_BOOK_LIST,
                        payload: data.works
                    });
                }
            })
            .catch(e => console.log(e));
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
            .catch(e => console.log(e));
    }
}

export function addReview(bookId, review) {
    return {
        type: ADD_REVIEW,
        payload: {bookId, review}
    }
}
