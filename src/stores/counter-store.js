import { computed, observable } from 'mobx'

export class CounterStore {
   @observable count = 0;

   @computed get isEven() {
      return this.count % 2 === 0;
   }

   increase() {
      this.count++;
   }

   decrease() {
      if (this.count > 0) {
         this.count--;
      }
   }
}

export default new CounterStore();