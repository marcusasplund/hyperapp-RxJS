import {h} from 'hyperapp'

export const addButton = (actions) =>
  <button class='button' onclick={actions.scheduleAdd}>add one +
  </button>
