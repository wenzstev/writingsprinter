import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useState} from "react"

import {useSelector} from "react-redux"

import SprintPad from "./components/SprintPad/"
import SettingsModal from "./components/SettingsPage/"



function App() {
  const modalIsOpen = useSelector(state=>state.start)


  return (
    <div>
      <SprintPad />
      <SettingsModal open={!modalIsOpen}/>
    </div>

  );
}

export default App;
