import {app} from 'hyperapp'
import {actions} from './actions'
import {store} from './store'
import {view} from './view'

app({
  actions,
  store,
  view
})
