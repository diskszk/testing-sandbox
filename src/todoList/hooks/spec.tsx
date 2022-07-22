import { renderHook, RenderHookResult } from "@testing-library/react";
import { TasksProvider } from "../context/TasksProvider";
import { ReturnType, useTasks } from "./useTasks";

describe("useTasks", () => {
  let renderHookResult: RenderHookResult<ReturnType, null>;
  beforeEach(() => {
    renderHookResult = renderHook(() => useTasks(), {
      wrapper: (props) => <TasksProvider>{props.children}</TasksProvider>,
    });
  });

  test("初期値は空の配列である", () => {
    const { result } = renderHookResult;
    expect(result.current.state).toEqual([]);
  });
});
