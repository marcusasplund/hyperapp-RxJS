import {h} from 'hyperapp'
import {addButton} from '../views/add-button'
import {subButton} from '../views/sub-button'
import {showConsole} from '../views/show-console'

export const view = (model, actions) =>
  <div class='container'>
    <h2>hyperapp rxjs <a href='https://github.com/marcusasplund/hyperapp-RxJS'><small>source</small></a></h2>
     <hr/>
      <h3>{model.count}</h3>
      {addButton(actions)}
      {subButton(actions)}
      {<p>click away, clicks will be captured and actions will be queued up, then executed with minimum 600ms between each</p>}
      {showConsole()}
  </div>
