import taskService from '../services/tasks'; 


const taskReducer = (state = [], action) => {
    console.log('ACTION:', action)
    switch(action.type) {
        case 'NEW_TASK':
          return [...state, action.data]
        case 'INIT_TASKS':
            return action.data
        default:
            return state
   }
  };
  

export const createTask = (title, time, id) => {
    return async dispatch => {
        const newTask = await taskService.createNew(title, time, id)
        dispatch({
            type:'NEW_TASK', 
            data: { 
                title, 
                time, 
                id,
            }
        })
    }
}



export const initializeTasks = () => {
    return async dispatch => {
        const tasks = await taskService.getAll()
        dispatch({
            type: 'INIT_TASKS', 
            data: tasks, 
        })
    }
}
export default taskReducer; 
