import {app} from 'hyperapp'
import {actions} from './actions'
import {state} from './state'
import {view} from '../views/'
import {registerWorker} from './register-worker'

app({
  actions,
  state,
  view
})

registerWorker()
