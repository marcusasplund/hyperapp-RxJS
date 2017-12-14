import {app} from 'hyperapp'
import {view} from './views/'
import {delayedClicks$} from './utils/delayed-click'
import {registerWorker} from './utils/register-worker'

const model = {
  state: {
    count: 0
  },
  actions: {
    add: () => state => ({
      count: ++state.count
    }),
    sub: () => state => ({
      count: --state.count
    }),
    scheduleAdd: () => state => {
      delayedClicks$.next(actions.add)
    },
    scheduleSub: () => state => {
      delayedClicks$.next(actions.sub)
    }
  }
}

const { actions } = app(model, view, document.body)

registerWorker()
