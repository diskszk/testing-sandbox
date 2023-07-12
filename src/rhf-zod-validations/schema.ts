import z from "zod";

export const schema = z
  .object({
    title: z
      .string()
      .min(1, "タイトルは必ず入力してください。")
      .max(25, "タイトルは25文字以内で入力してください。"),
  })
  .required()
  .strict();

export type Input = z.infer<typeof schema>;
