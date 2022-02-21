import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Post from './components/Post';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Post name="denis kidagi" description="javascrip Developer" message="awesome job"/>
      </div>
    </div>
  );
}

export default App;
