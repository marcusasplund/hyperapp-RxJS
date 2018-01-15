
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/observable/of'

const delay$ = _ => Observable.of(_).delay(600)

const delayedClicks$ = (new Subject())
  .concatMap(delay$)

const started = window.performance.now()

delayedClicks$.subscribe(callback => {
  const time = window.performance.now() - started
  console.log(`executing at ${time.toFixed(2)} ms`)
  callback()
})

export {delayedClicks$}
