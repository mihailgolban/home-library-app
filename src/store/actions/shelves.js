export const ADD_NEW_SHELF = 'ADD_NEW_SHELF';
export const DELETE_SHELF = 'DELETE_SHELF';
export const ADD_BOOK_TO_SHELF = 'ADD_BOOK_TO_SHELF';
export const SET_ACTIVE_SHELF = 'SET_ACTIVE_SHELF';

export function addNewShelf(name, categories=[]) {
    return {
        type: ADD_NEW_SHELF,
        payload: {name, categories}
    }
}

export function addBookToShelf(shelfId, bookId) {
    return (dispatch, getState) => {
        const book = getState().booksReducer.bookDetails[bookId];
        dispatch({
            type: ADD_BOOK_TO_SHELF,
            payload: {shelfId, bookId, book}
        })
    }
}

export function deleteShelf(shelfId) {
    if (shelfId) {
        return {
            type: DELETE_SHELF,
            payload: shelfId
        }
    }
}

export function setActiveShelf(shelfId) {
    return {
        type: SET_ACTIVE_SHELF,
        payload: shelfId
    }
}

