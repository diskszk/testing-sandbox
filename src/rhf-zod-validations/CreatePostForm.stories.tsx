import type { Meta, StoryObj } from "@storybook/react";
import { CreatePostForm } from "./CreatePostForm";
import { within, userEvent } from "@storybook/testing-library";

const meta: Meta<typeof CreatePostForm> = {
  component: CreatePostForm,
};

export default meta;

type Story = StoryObj<typeof CreatePostForm>;

export const Default: Story = {};

export const EmptyTitle: Story = {
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // タイトル入力欄にフォーカスを当てる
    await canvas.getByRole("textbox", { name: "タイトル" }).focus();

    // 何も入力せずにフォーカスを外す
    await userEvent.tab();
  },
};

export const OverTitleLength: Story = {
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByRole("textbox", { name: "タイトル" }),
      "A".repeat(26)
    );

    await userEvent.tab();
  },
};
