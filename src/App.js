import React from 'react';
import { PostList } from './features/PostList/postList';
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
    <Route path='r/:sub/comments/:id/:title' element={<FullPost/>}/>
  </Route>
));

function App() {

  return (
    <div className="App">
      <nav>
          <div className="nav-container">
          <i className='bx bxl-reddit icon'></i>
              <span className="logo">Mini<span className='logoHighlight'>Reddit</span></span>
          </div>
        </nav>    
      <main>
         <RouterProvider router={appRouter}/>
      </main>
    </div>
  );
}

export default App;
