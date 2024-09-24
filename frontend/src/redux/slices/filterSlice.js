import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // return {...state, title: action.payload};
            state.title = action.payload;
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },
        setOnlyFavoriteFilter: state => {
            state.onlyFavorite = !state.onlyFavorite;
        },
        resetFilters: () => {
            return initialState;
        },
    },
});

export const { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter, resetFilters } = filterSlice.actions;

export const selecTitleFilter = state => state.filter.title;
export const selecAuthorFilter = state => state.filter.author;
export const selecOnlyFavoriteFilter = state => state.filter.onlyFavorite;

export default filterSlice.reducer;
