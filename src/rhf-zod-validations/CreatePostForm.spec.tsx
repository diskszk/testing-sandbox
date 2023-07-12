import { render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./CreatePostForm.stories";
import { CreatePostForm } from "./CreatePostForm";
import userEvent from "@testing-library/user-event";

test("タイトルが入力されていない場合、エラーメッセージを表示する", async () => {
  const { EmptyTitle } = composeStories(stories);

  const { container } = render(<EmptyTitle />);

  await EmptyTitle.play({ canvasElement: container });

  const title = screen.getByRole("textbox", { name: "タイトル" });

  await waitFor(() => {
    expect(title).toBeInvalid();
  });
  expect(title).toHaveErrorMessage("タイトルは必ず入力してください。");
});

test("タイトルに26文字入力された場合、エラーメッセージを表示する", async () => {
  const { OverTitleLength } = composeStories(stories);
  const { container } = render(<OverTitleLength />);

  await OverTitleLength.play({ canvasElement: container });

  const title = screen.getByRole("textbox", { name: "タイトル" });

  await waitFor(() => {
    expect(title).toBeInvalid();
  });
  expect(title).toHaveErrorMessage("タイトルは25文字以内で入力してください。");
});

test("タイトルが入力されていない場合、エラーメッセージを表示する2", async () => {
  const user = userEvent.setup();
  render(<CreatePostForm />);

  const title = screen.getByRole("textbox", { name: "タイトル" });
  await user.click(title);
  await user.tab();

  await waitFor(() => {
    expect(title).toBeInvalid();
  });
  expect(title).toHaveErrorMessage("タイトルは必ず入力してください。");
});
