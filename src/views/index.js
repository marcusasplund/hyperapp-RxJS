/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {HeaderSection} from './header-section'
import {AddButton} from './add-button'
import {SubButton} from './sub-button'
import {ShowConsole} from './show-console'

export const view = (store, actions) =>
  <div class='container'>
    <HeaderSection />
    <AddButton actions={actions} />
    <SubButton actions={actions} />
    <ShowConsole />
  </div>
  
