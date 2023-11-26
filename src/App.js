import React, { useState, useEffect } from 'react';
import BotCollection from './components/Botcollection';
import Botarmy from './components/Botarmy';
import './App.css';

  useEffect(() => {
    fetchBots();
  }, []);

  function fetchBots() {
    fetch('https://mock-4oke.onrender.com/bots')
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }