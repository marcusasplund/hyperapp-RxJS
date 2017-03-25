import {h} from 'hyperapp'
import {addButton} from '../views/add-button'
import {subButton} from '../views/sub-button'
import {showConsole} from '../views/show-console'

export const view = (model, actions) =>
  <div class='container'>
    <h2>hyperapp rxjs <a href=''><small>source</small></a></h2>
     <hr/>
      <h3>{model.count}</h3>
      {addButton(actions)}
      {subButton(actions)}
      {showConsole()}
  </div>
