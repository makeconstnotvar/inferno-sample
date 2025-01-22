import {computed, observable} from "mobx";
import {BaseStore} from "./BaseStore";
import {rickApi} from "../api/rickApi";

class CharactersStore extends BaseStore {
  @observable fetchMethod = rickApi.searchCharacters;
}

export {CharactersStore}
