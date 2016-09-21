import { shallow } from 'enzyme'
import React from "react"

import Counter from "../src/components/counter/counter"

describe("Counter component", function() {
	//don't use an arrow function...preserve the value of "this"
	beforeEach(function() {
		this.store = {
			count: 3,
			isEven: false,
			increase: () => {
				this.increaseClicked = true;
			},
			decrease: () => {
				this.decreaseClicked = true;
			}
		}
	});

	// tests will go here and receive this.store
	// don't use an arrow function, preserve the value of "this"
	it("Renders counter correctly", function() {
		const wrapper = shallow(<Counter store={this.store} />);

		expect(wrapper.find("span").at(0).text()).toBe("3")
	})

	it("Increase & decrease button works", function() {
		const wrapper = shallow(<Counter store={this.store} />);

		expect(wrapper.find("span").at(0).text()).toBe("3");

		wrapper.find(".btn-increase").at(0).simulate("click");
		wrapper.find(".btn-decrease").at(0).simulate("click");

		expect(this.increaseClicked).toBe(true);
		expect(this.decreaseClicked).toBe(true);
	})
})