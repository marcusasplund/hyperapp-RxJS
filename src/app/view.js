/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {HeaderSection} from '../views/header-section'
import {AddButton} from '../views/add-button'
import {SubButton} from '../views/sub-button'
import {ShowConsole} from '../views/show-console'

export const view = (store, actions) =>
  <div class='container'>
    <HeaderSection />
    <AddButton actions={actions} />
    <SubButton actions={actions} />
    <ShowConsole />
  </div>
