import {h} from 'hyperapp'

export const subButton = (actions) =>
  <button class='button' onclick={actions.scheduleSub}>subtract one +
  </button>
