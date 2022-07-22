import { ADD_TASK, CHANGE_DONE, DELETE_TASK, reducer } from "./reducer";

describe("reducer", () => {
  test("ADD_TASK", () => {
    const result = reducer([], {
      type: ADD_TASK,
      payload: { id: 1, text: "sample", done: false },
    });

    expect(result).toEqual([{ id: 1, text: "sample", done: false }]);
  });

  test("CHANGE_DONE", () => {
    const result = reducer([{ id: 1, text: "sample", done: false }], {
      type: CHANGE_DONE,
      payload: 1,
    });

    expect(result).toEqual([{ id: 1, text: "sample", done: true }]);
  });

  test("DELETE_TASK", () => {
    const result = reducer([{ id: 1, text: "sample", done: false }], {
      type: DELETE_TASK,
      payload: 1,
    });

    expect(result).toEqual([]);
  });
});
