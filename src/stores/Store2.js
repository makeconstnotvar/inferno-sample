import {computed, observable} from "mobx";

class Store2 {
  @observable name = 'Вася';

  @computed do() {
    console.log('Вася do');
  }
}

export {Store2}