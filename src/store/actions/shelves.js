export const ADD_NEW_SHELF = 'ADD_NEW_SHELF';
export const RENAME_SHELF = 'RENAME_SHELF';
export const DELETE_SHELF = 'DELETE_SHELF';

export function addNewShelf(name, categories=[]) {
    return {
        type: ADD_NEW_SHELF,
        payload: {name, categories}
    }
}

export function renameShelf(shelfId, newName) {
    return {
        type: RENAME_SHELF,
        payload: {shelfId, newName}
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
