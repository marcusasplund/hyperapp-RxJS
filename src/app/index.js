import {h, app} from 'hyperapp'
import {actions} from './actions'
import {model} from './model'
import {view} from './view'

app({
  actions,
  model,
  view
})
