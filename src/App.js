import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Divider } from 'antd';
import HOC from './page/HOC'

function App() {
  return (
    <div className="App">
        <Divider />
        <HOC></HOC>
        <Divider />
    </div>
  );
}

export default App;
