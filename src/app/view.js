/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {headerSection} from '../views/header-section'
import {addButton} from '../views/add-button'
import {subButton} from '../views/sub-button'
import {showConsole} from '../views/show-console'

export const view = (model, actions) =>
  <div class='container'>
    {headerSection()}
    {addButton(actions)}
    {subButton(actions)}
    {showConsole()}
  </div>
