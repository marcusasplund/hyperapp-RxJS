import '../css/app.css'
import {h, app} from 'hyperapp'
import {view} from './view'
import {actions} from './actions'
import {model} from './model'

app({
  actions,
  model,
  view
})