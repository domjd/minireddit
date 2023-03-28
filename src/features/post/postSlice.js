import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (subName, thunkAPI) => {
        const posts = await fetch('https://api.reddit.com/r/popular.json');
        const response = await posts.json();
        console.log(response)
        return response.data.children;
    }
);

const initialState = {
    posts:[],
    isLoading: false,
    isError: false
}

const options = {
    name: 'posts',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            console.log("FAILED")
        }
    }
}

export const postSlice = createSlice(options)
export const selectPosts = (state) => state.posts.posts;

export const {getPosts} = postSlice.actions;
export default postSlice.reducer
