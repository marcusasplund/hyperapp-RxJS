import { Subject, Observable, of } from 'rxjs'
import { delay, concatMap } from 'rxjs/operators'

const delay$ = _ => of(_).pipe(delay(600))

const delayedClicks$ = (new Subject()).pipe(concatMap(delay$))

const started = window.performance.now()

delayedClicks$.subscribe(callback => {
  const time = window.performance.now() - started
  console.log(`executing at ${time.toFixed(2)} ms`)
  callback()
})

export { delayedClicks$ }
