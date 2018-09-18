/* eslint-disable no-unused-vars */
import { Observable, Subject, of } from 'rxjs'
import { delay, pipe } from 'rxjs/operators'

const delay$ = delay(600)

const delayedClicks$ = (new Subject())
  .pipe(delay$)

const started = window.performance.now()

delayedClicks$.subscribe(callback => {
  const time = window.performance.now() - started
  console.log(`executing at ${time.toFixed(2)} ms`)
  callback()
})

export { delayedClicks$ }
