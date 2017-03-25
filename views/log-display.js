import {h} from 'hyperapp'

export const logDisplay = (model) =>
  <pre>
    <code>
      {JSON.stringify(model, null, 2)}
    </code>
  </pre>
