import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const loadSearchResults = createAsyncThunk(
    'search/loadSearchResults',
    async (searchQuery, thunkAPI) => {
        const posts = await fetch(`https://api.reddit.com/search.json?q=${searchQuery}`);
        const response = await posts.json();
        console.log("SEARCH RESULTS: ",response)
        return response.data.children;
    }
);

const initialState = {
    searchResults:[],
    isLoading: false,
    isError: false
}

const options = {
    name: 'search',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [loadSearchResults.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
        [loadSearchResults.fulfilled]: (state, action) => {
            state.searchResults = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSearchResults.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            console.log("FAILED")
        }
    }
}

export const searchSlice = createSlice(options)
export const selectSearchResults = (state) => state.search.searchResults;

export default searchSlice.reducer
