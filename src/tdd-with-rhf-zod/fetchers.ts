import { Input } from "./CreatePostForm";

export async function postNewPost(data: Input): Promise<void> {
  const res = await fetch("api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status < 300) {
    return;
  } else {
    throw new Error("エラーが発生しました。");
  }
}
