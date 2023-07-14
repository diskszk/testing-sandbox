import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { CreatePostForm } from "./CreatePostForm";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

afterEach(() => {
  cleanup();
  mockFn.mockClear();
});

const mockFn = jest.fn();

const setup = () => {
  render(<CreatePostForm handleSubmitPost={mockFn} />);

  const title = screen.getByRole("textbox", { name: "タイトル" });
  const body = screen.getByRole("textbox", { name: "本文" });
  const submitButton = screen.getByRole("button", { name: "送信" });

  const typeTitle = async (value: string) => {
    await user.type(title, value);
  };

  const typeBody = async (value: string) => {
    await user.type(body, value);
  };

  const clickSubmitButton = async () => {
    await user.click(submitButton);
  };

  return {
    element: {
      title,
      body,
      submitButton,
    },
    action: {
      typeTitle,
      typeBody,
      clickSubmitButton,
    },
  };
};

test("初期事表示では送信ボタンが非活性", async () => {
  render(<CreatePostForm handleSubmitPost={mockFn} />);

  expect(screen.getByRole("button", { name: "送信" })).toBeDisabled();
});

test("タイトルに1文字以上入力すると、送信ボタンが活性になる", async () => {
  const { element, action } = setup();

  await action.typeTitle("テスト用タイトル");

  expect(element.submitButton).toBeEnabled();
});

test("本文に1文字以上入力すると、送信ボタンが活性になる", async () => {
  const { element, action } = setup();

  await action.typeBody("テスト用本文");

  expect(element.submitButton).toBeEnabled();
});

test("タイトルが入力されていない場合、エラーメッセージを表示する", async () => {
  const { element } = setup();

  await user.click(element.title);
  await user.tab();

  await waitFor(() => {
    expect(element.title).toBeInvalid();
  });
  expect(element.title).toHaveErrorMessage("タイトルは必ず入力してください。");
});
test("タイトルに26文字入力された場合、エラーメッセージを表示する", async () => {
  setup();

  const title = screen.getByRole("textbox", { name: "タイトル" });

  await user.click(title);
  await user.type(title, "A".repeat(26));

  await user.tab();

  await waitFor(() => {
    expect(title).toBeInvalid();
  });
  expect(title).toHaveErrorMessage("タイトルは25文字以内で入力してください。");
});

test("本文が入力されていない場合、エラーメッセージを表示する", async () => {
  const { element } = setup();

  await user.click(element.body);
  await user.tab();

  await waitFor(() => {
    expect(element.body).toBeInvalid();
  });
  expect(element.body).toHaveErrorMessage("本文は必ず入力してください。");
});
test("本文に141文字入力された場合、エラーメッセージを表示する", async () => {
  setup();

  const body = screen.getByRole("textbox", { name: "本文" });

  await user.click(body);

  await user.type(body, "A".repeat(141));
  await user.tab();

  expect(body).toBeInvalid();
  expect(body).toHaveErrorMessage("本文は140文字以内で入力してください。");
});

test("タイトルに1文字入力された場合、バリデーションエラーが発生しない", async () => {
  setup();

  const title = screen.getByRole("textbox", { name: "タイトル" });
  await user.type(title, "A");
  await user.tab();

  expect(title).not.toBeInvalid();
});
test("タイトルに25文字入力された場合、バリデーションエラーが発生しない", async () => {
  setup();

  const title = screen.getByRole("textbox", { name: "タイトル" });
  await user.type(title, "A".repeat(25));
  await user.tab();

  expect(title).not.toBeInvalid();
});
test("本文に1字入力された場合、バリデーションエラーが発生しない", async () => {
  setup();

  const body = screen.getByRole("textbox", { name: "本文" });
  await user.type(body, "A");
  await user.tab();

  expect(body).not.toBeInvalid();
});
test("本文に140字入力された場合、バリデーションエラーが発生しない", async () => {
  setup();

  const body = screen.getByRole("textbox", { name: "本文" });
  await user.type(body, "A".repeat(140));
  await user.tab();

  expect(body).not.toBeInvalid();
});

test("タイトルに`テスト用タイトル`、本文に`テスト用本文`と入力された時、バリデーションエラーが発生しない", async () => {
  const { element, action } = setup();

  await action.typeTitle("テスト用タイトル");
  await action.typeBody("テスト用本文");

  await user.tab();

  expect(element.title).not.toBeInvalid();
  expect(element.body).not.toBeInvalid();
});
test("タイトルに`テスト用タイトル`、本文に`テスト用本文`と入力され、送信ボタンがクリックされた時、submit関数を実行する", async () => {
  const { action } = setup();

  await action.typeTitle("テスト用タイトル");
  await action.typeBody("テスト用本文");

  await action.clickSubmitButton();

  expect(mockFn).toHaveBeenCalled();
});

test("タイトルが入力されておらず、本文が正常に入力された場合、submit関数は実行しない", async () => {
  const { element, action } = setup();

  await action.typeBody("テスト用本文");
  expect(element.submitButton).toBeEnabled();

  await action.clickSubmitButton();
  expect(mockFn).not.toHaveBeenCalled();
});
test("タイトルに26文字入力され、本文が正常に入力された場合、submit関数は実行しない", async () => {
  const { element, action } = setup();

  await action.typeTitle("A".repeat(26));
  await action.typeBody("テスト用本文");
  expect(element.submitButton).toBeEnabled();

  await action.clickSubmitButton();
  expect(mockFn).not.toHaveBeenCalled();
});
test("本文が入力されておらず、タイトルが正常に入力された場合、submit関数は実行しない", async () => {
  const { element, action } = setup();

  await action.typeTitle("テスト用タイトル");
  expect(element.submitButton).toBeEnabled();

  await action.clickSubmitButton();
  expect(mockFn).not.toHaveBeenCalled();
});
test("本文に141文字入力され、タイトルが正常に入力された場合、submit関数は実行しない", async () => {
  const { element, action } = setup();

  await action.typeTitle("テスト用タイトル");
  await action.typeBody("A".repeat(141));
  expect(element.submitButton).toBeEnabled();

  await action.clickSubmitButton();
  expect(mockFn).not.toHaveBeenCalled();
});

test("送信中は送信ボタンは非活性である", async () => {
  const { element, action } = setup();

  await action.typeTitle("テスト用タイトル");
  await action.typeBody("テスト用本文");

  await action.clickSubmitButton();
  expect(element.submitButton).toBeDisabled();
});
test("送信後は入力フォームは初期化する", async () => {
  const { element, action } = setup();

  await action.typeTitle("テスト用タイトル");
  await action.typeBody("テスト用本文");

  await action.clickSubmitButton();

  expect(element.title).toHaveValue("");
  expect(element.body).toHaveValue("");
});
