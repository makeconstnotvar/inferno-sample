import {computed, observable} from "mobx";

class Store1 {
  @observable name = 'Петя';

  @computed do() {
    console.log('Петя do');
  }
}

export {Store1}