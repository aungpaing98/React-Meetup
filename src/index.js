import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FavoriteContentProvider} from './store/favorite-contents';

ReactDOM.render(
  <FavoriteContentProvider>
    <App />
    </FavoriteContentProvider>,
  document.getElementById('root')
);