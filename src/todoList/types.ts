export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TasksDispatch = {
  addTask: (task: Task) => void;
  changeDone: (id: number) => void;
  deleteTask: (id: number) => void;
};
