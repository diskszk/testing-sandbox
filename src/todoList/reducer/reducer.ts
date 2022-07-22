import { Reducer } from "react";
import { Task } from "../types";

export const ADD_TASK = "ADD_TASK";
export const CHANGE_DONE = "CHANGE_DONE";
export const DELETE_TASK = "DELETE_TASK";

type AddTaskAction = {
  type: typeof ADD_TASK;
  payload: Task;
};
type ChangeDoneAction = {
  type: typeof CHANGE_DONE;
  payload: number;
};
type DeleteTaskAction = {
  type: typeof DELETE_TASK;
  payload: number;
};

export type Action = AddTaskAction | ChangeDoneAction | DeleteTaskAction;
export const reducer: Reducer<Task[], Action> = (state, action): Task[] => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, { ...action.payload }];
    }

    case CHANGE_DONE: {
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    }

    case DELETE_TASK: {
      return state.filter(({ id }) => id !== action.payload);
    }

    default: {
      throw new Error("Unhandled action type");
    }
  }
};
