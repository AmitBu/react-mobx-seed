import React from 'react';
import {observer} from 'mobx-react';


@observer
export default class Counter extends React.Component {
	increaseCount = () => {
		this.props.store.count++;
	};

	decreaseCount() {
		this.props.store.count--;
	};

	render() {
		let counter = this.props.store;

		return (
			<div>
				<h1>Todo list</h1>
				{counter.count}
				<button onClick={this.increaseCount}>+</button>
				<button onClick={this.decreaseCount.bind(this)}>-</button>
			</div>
		);
	}
}