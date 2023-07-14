import { Input } from "./CreatePostForm";
import axios from "axios";

export function useCreatePost() {
  const createPost = async (data: Input) => {
    if (data.title.length < 1 || data.title.length > 25) {
      throw new Error("タイトルに不正な値が入力されています。");
    }
    if (data.body.length < 1 || data.body.length > 140) {
      throw new Error("本文に不正な値が入力されています。");
    }

    try {
      await axios.post("api/posts", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return;
    } catch {
      throw new Error("エラーが発生しました。");
    }
  };

  return { createPost };
}
