import React, {PureComponent, useEffect} from 'react';
import {inject, observer} from "mobx-react";



const CharactersPage = inject('$characters')(observer(
  props => {

    props.$characters.fetchItems({page: 2});

    return (
      <div>
        <h1>Characters</h1>
      </div>
    )

  }
))


export {CharactersPage}
