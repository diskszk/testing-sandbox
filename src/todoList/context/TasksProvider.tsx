import { createContext, ReactNode, useCallback, useReducer } from "react";
import { ADD_TASK, CHANGE_DONE, DELETE_TASK, reducer } from "../reducer";
import { Task, TasksDispatch } from "../types";

export const TasksStateContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext<TasksDispatch>({
  addTask: () => void 0,
  changeDone: () => void 0,
  deleteTask: () => void 0,
});

type Props = {
  children: ReactNode;
};

export const TasksProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addTask = useCallback(
    (task: Task) => dispatch({ type: ADD_TASK, payload: task }),
    []
  );
  const changeDone = useCallback(
    (id: number) => dispatch({ type: CHANGE_DONE, payload: id }),
    []
  );
  const deleteTask = useCallback(
    (id: number) => dispatch({ type: DELETE_TASK, payload: id }),
    []
  );

  return (
    <TasksStateContext.Provider value={state}>
      <TasksDispatchContext.Provider
        value={{ addTask, changeDone, deleteTask }}
      >
        {children}
      </TasksDispatchContext.Provider>
    </TasksStateContext.Provider>
  );
};
