import { TodoStore } from "../src/store/todo-store"

describe("TodoStore", () => {
	// beforeEach(function() {
	// 	console.log("new test");
	// })

	it("creates new todos", () => {
		const store = new TodoStore;
		store.createTodo("todo1");
		store.createTodo("todo2");
		expect(store.todos.length).toBe(2);
		expect(store.todos[0].name).toBe("todo1");
		expect(store.todos[1].name).toBe("todo2");
	})

	it("Clear checked todos", () => {
		const store = new TodoStore();
		store.createTodo("todo1");
		store.createTodo("todo2");
		store.todos[0].toggleCheck();

		store.clearComplete();
		expect(store.todos.length).toBe(1);
	})
});