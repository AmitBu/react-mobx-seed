import { computed, observable } from 'mobx'

export class CounterStore {
   @observable count = 0;

   @computed get unfinishedTodos() {
      return this.todos.filter(todo => !todo.checked).length;
   }

   increase() {
      this.count++;
   }

   decrease() {
      this.count--;
   }
}

export default new CounterStore();