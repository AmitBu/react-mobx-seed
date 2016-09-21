import React from 'react';
import {observer} from 'mobx-react';


@observer
export default class Counter extends React.Component {
	increaseCount = () => {
		this.props.store.increase();
	};

	decreaseCount = () => {
		this.props.store.decrease();
	};

	render() {
		let counter = this.props.store;

		return (
			<div className="counter">
				<button className="btn-increase" onClick={this.increaseCount}>+</button>
				<span className={counter.isEven ? 'even' : 'odd'}>{counter.count}</span>
				<button className="btn-decrease" onClick={this.decreaseCount}>-</button>

				<p className="type">{ counter.isEven ? 'Even' : 'Odd' } number</p>
			</div>
		);
	}
}