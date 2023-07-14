import { userEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import { CreatePostPage } from "./CreatePostPage";
import { server } from "../mocks/server";
import { rest } from "msw";

const user = userEvent.setup();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setup = async () => {
  render(<CreatePostPage />);

  const title = screen.getByRole("textbox", { name: "タイトル" });
  const body = screen.getByRole("textbox", { name: "本文" });

  await user.type(title, "テスト用タイトル");
  await user.type(body, "テスト用本文");

  const submitButton = screen.getByRole("button", { name: "送信" });

  const clickSubmitButton = async () => {
    await user.click(submitButton);
  };

  return { clickSubmitButton };
};

test("記事の作成中にエラーが発生する場合、記事の作成に失敗した旨のメッセージを表示する", async () => {
  server.use(
    rest.post("api/posts", (_req, res, ctx) => {
      // 400エラー(Bad Request)を発生させる
      return res(ctx.status(400));
    })
  );
  const { clickSubmitButton } = await setup();

  await clickSubmitButton();

  expect(screen.getByRole("alert")).toHaveTextContent("エラーが発生しました。");
});

test("記事の作成が成功した場合、記事の作成に成功した旨のメッセージを表示する", async () => {
  const { clickSubmitButton } = await setup();

  await clickSubmitButton();

  expect(screen.getByRole("alert")).toHaveTextContent(
    "記事の作成に成功しました。"
  );
});
