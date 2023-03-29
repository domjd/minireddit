import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Post } from './features/post/post';
import './App.css';
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
      <h1>TEST</h1>
      <header className="App-header">
        {isLoading ?  <div className="lds-ripple"><div></div><div></div></div> : <Post />} 
      </header>
    </div>
  );
}

export default App;
