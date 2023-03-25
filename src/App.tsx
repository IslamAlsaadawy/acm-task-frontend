import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import AddUser from './components/users/addUser';

function App() {
  return (
      <main>
        <Navbar></Navbar>
        <AddUser></AddUser>

      </main>
  );
}

export default App;
