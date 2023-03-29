import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Post } from './features/post/post';
import './App.css';
import './nav.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './features/post/postSlice';

function App() {

  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.posts);


  useEffect(() => {
    dispatch(loadPosts())
   },[dispatch])


  return (
    <div className="App">
      <nav>
          <div className="nav-container">
          <i className='bx bxl-reddit icon'></i>
              <span className="logo">Mini<span className='logoHighlight'>Reddit</span></span>
          </div>
        </nav>    
      <header className="App-header">
        {isLoading ?  <div className="lds-ripple"><div></div><div></div></div> : <Post />} 
      </header>
    </div>
  );
}

export default App;
