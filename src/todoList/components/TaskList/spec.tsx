import { render, RenderOptions, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { TasksStateContext } from "../../context/TasksProvider";
import { Task } from "../../types";
import { TaskList } from "./TaskList";

const customRender = (
  ui: ReactElement,
  { providerProps }: { providerProps: Task[] },
  options?: Omit<RenderOptions, "queries">
) => {
  return render(
    <TasksStateContext.Provider value={...providerProps}>
      {ui}
    </TasksStateContext.Provider>,
    { ...options }
  );
};
describe("TaskList", () => {
  test("タスクが存在しない場合、「タスクが存在しません。」という文言を表示する", () => {
    customRender(<TaskList />, { providerProps: [] });
    expect(screen.getByText("タスクが存在しません。")).toBeInTheDocument();
  });
  test("タスクの数だけ[タスク内容], doneボタン, 削除ボタン表示する", () => {
    customRender(<TaskList />, {
      providerProps: [
        {
          id: 1,
          text: "sample1",
          done: false,
        },
        {
          id: 2,
          text: "sample2",
          done: false,
        },
        {
          id: 3,
          text: "sample3",
          done: false,
        },
      ],
    });
    expect(screen.getAllByTestId(/task:/)).toHaveLength(3);
    expect(screen.getAllByRole("button", { name: "done" })).toHaveLength(3);
    expect(screen.getAllByRole("button", { name: "削除" })).toHaveLength(3);
  });
  test("done状態のタスクは取り消し線を表示する", () => {
    customRender(<TaskList />, {
      providerProps: [{ id: 1, text: "sample", done: true }],
    });
    expect(screen.getByText("sample")).toHaveStyle({
      textDecoration: "line-through",
    });
  });
});
