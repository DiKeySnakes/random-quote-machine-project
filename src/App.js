import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

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
        const data = response.data;

        setQuote(data.quote);
        setAuthor(data.author);
        console.log(data.quote);
        console.log(data.author);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const quoteText = quote;
  const quoteAuthor = author;

  return (
    <div className='app'>
      <div id='logo'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div id='quote-box' className='card'>
        <div className='quote'>
          <h2 id='quote'>
            <FontAwesomeIcon icon={solid('quote-left')} /> {quoteText}{' '}
            <FontAwesomeIcon icon={solid('quote-right')} />
          </h2>
          <h3 id='author'>- {quoteAuthor}</h3>
        </div>
        <div className='button-box'>
          <a
            id='tweet-quote'
            className='button'
            href='twitter.com/intent/tweet'
            target='_blank'
          >
            <span>
              Tweet Quote <FontAwesomeIcon icon={brands('twitter')} />
            </span>
          </a>
          <button id='new-quote' className='button' onClick={fetchAdvice}>
            <span>
              New Quote <FontAwesomeIcon icon={solid('quote-left')} />
            </span>
          </button>
        </div>
      </div>
      <div id='footer'>
        <footer>
          <p>
            Created by DiKeySnakes for
            <a
              href='https://www.freecodecamp.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              freeCodeCamp <FontAwesomeIcon icon={brands('free-code-camp')} />
            </a>{' '}
            curriculum
          </p>
          <p>
            Copyright © DiKeySnakes 2023
            <a
              href='https://github.com/DiKeySnakes/random-quote-machine-project'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <FontAwesomeIcon id='githubIcon' icon={brands('github')} />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
