import {app} from 'hyperapp'
import {view} from './views/'
import {delayedClicks$} from './utils/delayed-click'

const state = {
  count: 0
}
const actions = {
  add: () => state => ({
    count: ++state.count
  }),
  sub: () => state => ({
    count: --state.count
  }),
  scheduleAdd: () => (state, actions) => {
    delayedClicks$.next(actions.add)
  },
  scheduleSub: () => (state, actions) => {
    delayedClicks$.next(actions.sub)
  }
}

window.main = app(state, actions, view, document.getElementById('app'))
