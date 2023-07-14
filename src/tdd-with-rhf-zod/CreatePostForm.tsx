import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId } from "react";

const schema = z
  .object({
    title: z
      .string()
      .min(1, "タイトルは必ず入力してください。")
      .max(25, "タイトルは25文字以内で入力してください。"),
    body: z
      .string()
      .min(1, "本文は必ず入力してください。")
      .max(140, "本文は140文字以内で入力してください。"),
  })
  .required()
  .strict();

export type Input = z.infer<typeof schema>;

type Props = {
  handleSubmitPost: SubmitHandler<Input>;
};

export const CreatePostForm: React.FC<Props> = ({ handleSubmitPost }) => {
  const errorMessageId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Input>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      body: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitPost)}>
        <input
          type="text"
          aria-label="タイトル"
          aria-invalid={!!errors.title}
          aria-errormessage={errorMessageId}
          {...register("title")}
        />
        {errors.title && (
          <p role="alert" id={errorMessageId}>
            {errors.title?.message}
          </p>
        )}
        <textarea
          aria-label="本文"
          rows={4}
          aria-invalid={!!errors.body}
          aria-errormessage={errorMessageId + 1}
          {...register("body")}
        />
        {errors.body && (
          <p role="alert" id={errorMessageId + 1}>
            {errors.body?.message}
          </p>
        )}
        <button disabled={isSubmitting || !isDirty}>送信</button>
      </form>
    </div>
  );
};
