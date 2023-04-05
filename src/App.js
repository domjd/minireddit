import React from 'react';
import { PostList } from './features/PostList/postList';
import { SearchResults } from './features/Search/searchResults';
import './App.css';
import './nav.css';
import Root from './root';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './features/PostList/postSlice';
import { FullPost } from './features/FullPost/FullPost';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<PostList/>}/>
    <Route path='r/:sub' element={<PostList/>}/>
    <Route path='r/:sub/comments/:id/:title' element={<FullPost/>}/>
    <Route path='search/:query' element={<SearchResults/>}/>
  </Route>
));

function App() {

  return (
    <div className="App"> 
        <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
