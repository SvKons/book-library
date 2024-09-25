import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';
import { setError } from './errorSlice';

const initialState = [];

export const fetchBook = createAsyncThunk('books/fetchBook', async (url, thunkAPI) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        thunkAPI.dispatch(setError(error.message));
        throw error;
    }
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        deleteBook: (state, action) => {
            return state.filter(book => book.id !== action.payload);
        },
        toggleFavorite: (state, action) => {
            // return state.map(book => (book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book));
            state.forEach(book => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });
        },
    },

    extraReducers: builder => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                state.push(createBookWithId(action.payload, 'API'));
            }
        });
    },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// extraReducers выше
// export const thunkFunction = async (dispatch, getState) => {
//     // async action
//     try {
//         const res = await axios.get('http://localhost:4000/random-book');
//         if (res?.data?.title && res?.data?.author) {
//             dispatch(addBook(createBookWithId(res.data, 'API')));
//         }
//     } catch (error) {
//         console.log('error', error);
//     }
// };

export const selectBooks = state => state.books;

export default booksSlice.reducer;
