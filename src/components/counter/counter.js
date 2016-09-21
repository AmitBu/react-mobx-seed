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
			<div className="counter">
				<button onClick={this.increaseCount}>+</button>
				<span className={counter.isEven ? 'even' : 'odd'}>{counter.count}</span>
				<button onClick={this.decreaseCount.bind(this)}>-</button>

				<p>{ counter.isEven ? 'Even' : 'Odd' } number</p>
			</div>
		);
	}
}