import * as actionTypes from './actionsTypes';

export const addBook = newBook => ({
    type: actionTypes.ADD_BOOK,
    payload: newBook,
});
