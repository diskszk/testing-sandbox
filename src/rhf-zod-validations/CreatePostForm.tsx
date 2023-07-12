// zod と storybook のテスト

import { useForm } from "react-hook-form";
import { Input, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";

export const CreatePostForm: React.FC = () => {
  const errorMessageId = useId();

  const {
    register,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
    mode: "onBlur", 
  });

  return (
    <div>
      <form onSubmit={() => void 0}>
        <label>
          タイトル:
          <input
            type="text"
            aria-label="タイトル"
            aria-errormessage={errorMessageId}
            aria-invalid={!!errors.title}
            {...register("title")}
          />
          {errors.title && (
            <p role="alert" id={errorMessageId}>
              {errors.title?.message}
            </p>
          )}
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};
