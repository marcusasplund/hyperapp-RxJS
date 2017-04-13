import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/observable/of'

const delay$ = _ => Observable.of(_).delay(600)

const delayedClicks$ = (new Subject())
.concatMap(delay$)

const started = window.performance.now()
delayedClicks$.subscribe(add => {
  const time = window.performance.now() - started
  console.log(`executing at ${time.toFixed(2)} ms`)
  add()
})

export const actions = {
  add: store => ({
    count: ++store.count
  }),
  scheduleAdd (store, _, actions) {
    delayedClicks$.next(actions.add)
  },
  scheduleSub (store, _, actions) {
    delayedClicks$.next(actions.sub)
  },
  sub: store => ({
    count: --store.count
  })
}
