/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const ShowConsole = () =>
  <fieldset id='console-log-div'>
    {
      logs.map((logitem, i) =>
        createLogNode(logitem, i))
    }
  </fieldset>

const logs = []

const log = console.log
const logError = console.error
const logWarn = console.warn
let index = 0

const pushLogs = (a, type) => {
  let args = Array.prototype.slice.call(a)
  for (var i = 0; i < args.length; i++) {
    logs.unshift({
      message: args[i],
      type: type,
      index: ++index
    })
  }
}

console.log = function () {
  log.apply(console, arguments)
  pushLogs(arguments, 'log')
}

console.error = function () {
  logError.apply(console, arguments)
  pushLogs(arguments, 'error')
}

console.warn = function () {
  logWarn.apply(console, arguments)
  pushLogs(arguments, 'warn')
}

const createLogNode = (logitem, i) =>
  <div class={logitem.type}>
    {logitem.index + '. '}{logitem.message}
  </div>
