import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/PostList/postSlice'
import fullPostReducer from '../features/FullPost/FullPostSlice'
import searchSliceReducer from '../features/Search/searchSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: fullPostReducer,
    search: searchSliceReducer
  },
});
