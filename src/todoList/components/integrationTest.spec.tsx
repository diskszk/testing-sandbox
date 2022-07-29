import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksProvider } from "../context/TasksProvider";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList/TaskList";

describe("TodoList", () => {
  render(
    <TasksProvider>
      <TaskForm />
      <TaskList />
    </TasksProvider>
  );

  test("タスクを作成して削除できること", async () => {
    // タスク入力フォームにテキストを入力する
    await userEvent.type(
      screen.getByLabelText("タスクを入力してください"),
      "sample"
    );

    // 作成ボタンをクリックする
    await userEvent.click(screen.getByRole("button", { name: "作成" }));

    // タスクリストに入力したテキストのタスクを表示する
    expect(screen.getByRole("listitem")).toHaveTextContent("sample");

    // 取り消し線が引かれていないこと
    expect(screen.getByText("sample")).not.toHaveStyle({
      textDecoration: "line-through",
    });

    // doneボタンをクリックすると取り消し線を表示する
    await userEvent.click(screen.getByRole("button", { name: "done" }));
    expect(screen.getByText("sample")).toHaveStyle({
      textDecoration: "line-through",
    });

    // 削除をクリックするとタスを削除する
    await userEvent.click(screen.getByRole("button", { name: "削除" }));
    expect(screen.queryByText("sample")).not.toBeInTheDocument();

    // "タスクが存在しません。"という文字列を表示する
    expect(screen.getByText("タスクが存在しません。")).toBeInTheDocument();
  });
});
