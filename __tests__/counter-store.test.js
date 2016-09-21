import {CounterStore} from "../src/stores/counter-store"

describe("Counter Store", () => {

	it("Increase & decrease counter", () => {
		const store = new CounterStore();
		expect(store.count).toBe(0);
		store.increase();
		expect(store.count).toBe(1);
		store.decrease();
		expect(store.count).toBe(0);
	})

	it("Counter can't be lower then zero", () => {
		const store = new CounterStore();
		expect(store.count).toBe(0);
		store.decrease();
		expect(store.count).toBe(0);
	})
});