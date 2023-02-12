import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get('https://dummyjson.com/quotes/random')
      .then((response) => {
        const quote = response.data;

        setQuote(quote.quote);
        setAuthor(quote.author);
        console.log(quote.quote);
        console.log(quote.author);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const text = quote;
  const person = author;

  return (
    <div className='app'>
      <div id='quote-box' className='card'>
        <p id='text' className='heading'>
          {text}
        </p>
        <h2 id='author'>{person}</h2>
        <button id='new-quote' className='button' onClick={fetchAdvice}>
          <span>New Quote</span>
        </button>
        <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank'>
          Tweet Quote
        </a>
      </div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
