import { renderHook } from "@testing-library/react";
import { useCreatePost } from "./useCreatePost";

describe("useCreatePost", () => {
  const { result } = renderHook(() => useCreatePost());

  test("タイトルが0文字の場合、エラーが発生する", async () => {
    await expect(
      async () =>
        await result.current.createPost({ title: "", body: "テスト用本文" })
    ).rejects.toThrow("タイトルに不正な値が入力されています。");
  });
  test("タイトルが26文字の場合、エラーが発生する", async () => {
    await expect(
      async () =>
        await result.current.createPost({
          title: "A".repeat(26),
          body: "テスト用本文",
        })
    ).rejects.toThrow("タイトルに不正な値が入力されています。");
  });
  test("本文が0文字の場合、エラーが発生する", async () => {
    await expect(
      async () =>
        await result.current.createPost({
          title: "テスト用タイトル",
          body: "",
        })
    ).rejects.toThrow("本文に不正な値が入力されています。");
  });
  test("本文が141文字の場合、エラーが発生する", async () => {
    await expect(
      async () =>
        await result.current.createPost({
          title: "テスト用タイトル",
          body: "A".repeat(141),
        })
    ).rejects.toThrow("本文に不正な値が入力されています。");
  });
});
