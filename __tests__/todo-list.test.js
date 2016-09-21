import { shallow } from 'enzyme'
import React from "react"

import TodoList from "../src/components/TodoList"

describe("TodoList", function() {
	//don't use an arrow function...preserve the value of "this"
	beforeEach(function() {
		this.store = {
			filteredTodos: [
				{name: "todo1", id: 111, checked: false},
				{name: "todo2", id: 222, checked: false},
				{name: "todo3", id: 333, checked: false},
			],
			filter: "test",
			createTodo: (val) => {
				this.createTodoCalled = true
				this.todoValue = val
			},
		}
	})

	//tests will go here and receive this.store
	//don't use an arrow function, preserve the value of "this"
	it("renders filtered todos", function() {
		const wrapper = shallow(<TodoList store={this.store} />)

		expect(wrapper.find("li span").at(0).text()).toBe("todo1")
		expect(wrapper.find("li span").at(1).text()).toBe("todo2")
		expect(wrapper.find("li span").at(2).text()).toBe("todo3")
	})

	it("Creates todo on enter", function() {
		const wrapper = shallow(<TodoList store={this.store} />);

		//console.log("wrap", wrapper.find(".new").at(0).text());
		wrapper.find(".btn-add").at(0).simulate("click");

		expect(this.createTodoCalled).toBe(true);
		expect(this.todoValue).toBe("Amit");
	})
})