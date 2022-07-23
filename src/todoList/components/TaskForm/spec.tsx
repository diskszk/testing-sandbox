import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskForm } from "./TaskForm";

describe("TaskForm", () => {
  beforeEach(() => {
    render(<TaskForm />);
  });

  test("「タスクを入力してください」の文言のラベルテキストを持つ入力フォームを表示する", () => {
    expect(screen.getByLabelText("タスクを入力してください")).toHaveValue("");
  });

  test("作成ボタンを表示する", () => {
    expect(screen.getByRole("button")).toHaveTextContent("作成");
  });

  test("入力フォームの内容が空の状態の場合、作成ボタンは非活性である", async () => {
    expect(screen.getByLabelText("タスクを入力してください")).toHaveValue("");
    expect(screen.getByRole("button")).not.toBeEnabled();
  });

  test("入力フォームに何か入力してある状態の場合、作成ボタンは活性である", async () => {
    await userEvent.type(
      screen.getByLabelText("タスクを入力してください"),
      "sample"
    );
    expect(screen.getByRole("button")).toBeEnabled();
  });

  test("作成ボタンをクリックすると入力フォームの内容が空になる", async () => {
    await userEvent.type(
      screen.getByLabelText("タスクを入力してください"),
      "sample"
    );
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText("タスクを入力してください")).toHaveValue("");
  });
});
