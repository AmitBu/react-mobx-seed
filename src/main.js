import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

import counterStore from './store/counter-store'

import './styles/style.scss'

ReactDOM.render(<Counter store={counterStore}/>, document.querySelector('#app'));