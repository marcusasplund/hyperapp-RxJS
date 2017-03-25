import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';

const delay$ = _ => Observable.of(_).delay(600)

const delayedClicks$ = (new Subject())
.concatMap(delay$)

const started = performance.now()

delayedClicks$.subscribe(add => {
  const time = performance.now() - started
  console.log(`executing at ${time.toFixed(2)} ms`)
  add()
})

export const actions = {
  add: model => ({
    count: ++model.count
 }),
  scheduleAdd(model, _, actions) {
    delayedClicks$.next(actions.add)
  },
  scheduleSub(model, _, actions) {
    delayedClicks$.next(actions.sub)
  },
  sub: model => ({
    count: --model.count
 })
}
