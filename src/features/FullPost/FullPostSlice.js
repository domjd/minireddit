import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const loadPost = createAsyncThunk(
    'post/loadPost',
    async ({sub, id, title}, thunkAPI) => {
        const post = await fetch(`https://api.reddit.com/r/${sub}/comments/${id}/${title}.json`);
        const response = await post.json();
        return response;
    }
);

const initialState = {
    postDetails:[],
    postComments: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}

const options = {
    name: 'post',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [loadPost.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
        [loadPost.fulfilled]: (state, action) => {
            state.postDetails = action.payload[0].data.children[0].data;
            state.postComments = action.payload[1].data.children;
            state.isSuccess = true;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            console.log("FAILED")
        }
    }
}

export const fullPostSlice = createSlice(options)
//export const selectPost = (state) => state.post.post;
export const selectPostDetails = (state) => state.post.postDetails;
export const selectPostComments = (state) => state.post.postComments;

export const {getPost} = fullPostSlice.actions;
export default fullPostSlice.reducer
