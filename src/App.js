import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Post } from './features/post/post';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPosts } from './features/post/postSlice';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
   },[dispatch])


  return (
    <div className="App">
      <header className="App-header">
        <Post />
      </header>
    </div>
  );
}

export default App;
