import { useContext } from "react";
import { Task, TasksDispatch } from "../types";
import { TasksDispatchContext, TasksStateContext } from "../context/TasksProvider";

export type ReturnType = {
  state: Task[];
} & TasksDispatch;

export function useTasks(): ReturnType {
  const state = useContext(TasksStateContext);
  const { addTask, changeDone, deleteTask } = useContext(TasksDispatchContext);
  return { state, addTask, changeDone, deleteTask };
}
