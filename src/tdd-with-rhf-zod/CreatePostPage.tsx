import { useCallback, useState } from "react";
import { CreatePostForm, Input } from "./CreatePostForm";
import { Snackbar } from "./Snackbar";
import { useCreatePost } from "./useCreatePost";

export const CreatePostPage: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const { createPost } = useCreatePost();
  const handleSubmitPost = useCallback(
    async (data: Input) => {
      try {
        await createPost(data);
        setMessage("記事の作成に成功しました。");
        setOpen(true);
      } catch (err) {
        if (err instanceof Error) {
          setMessage(err.message);
          setOpen(true);
        }
      }
    },
    [createPost]
  );

  return (
    <div>
      <CreatePostForm handleSubmitPost={handleSubmitPost} />
      <Snackbar message={message} isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};
