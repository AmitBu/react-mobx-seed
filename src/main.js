import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter/counter';

import CounterStore from './stores/counter-store'

import './styles/style.scss'

ReactDOM.render((
	<div>
		<h1>Counter sample app</h1>
		<Counter store={CounterStore}/>
	</div>
), document.querySelector('#app'));