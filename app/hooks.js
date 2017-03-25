import {setTodos} from '../utils/local-storage'

export const hooks = {
  onUpdate: (oldModel, newModel, data) =>
      setTodos(newModel.todos)
}
