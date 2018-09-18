/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'

export const HeaderSection = () =>
  <header>
    <h2>hyperapp RxJS </h2>
    <p>
      <small>
        <em>
          click away, clicks will be captured and actions will be queued up, then executed with minimum 600ms between each
        </em>{' '}
        <a href='https://github.com/marcusasplund/hyperapp-RxJS'>
           source
        </a>
      </small>
    </p>
    <hr />
  </header>
