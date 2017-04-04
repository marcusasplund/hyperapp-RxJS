/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const showConsole = () =>
  <fieldset id='console-log-div'>
    {
      model.logs.map((item) =>
        createLogNode(item))
    }
  </fieldset>

const model = {
  logs: []
}

const log = console.log
const logError = console.error
const logWarn = console.warn

const pushLogs = (a, type) => {
  let args = Array.prototype.slice.call(a)
  for (var i = 0; i < args.length; i++) {
    model.logs.push({
      message: args[i],
      type: type
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

const createLogNode = (item) =>
  <div class={item.type}>{item.message}</div>
