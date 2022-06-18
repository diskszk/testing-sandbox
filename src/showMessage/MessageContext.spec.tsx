import { fireEvent, render, screen } from "@testing-library/react";
import {
  MessageProvider,
  useMessageSetValue,
  useMessageValue,
} from "./MessageContext";

const TestingComponent = () => {
  const { text } = useMessageValue();
  const setMessage = useMessageSetValue();

  return (
    <>
      <p data-testid="text">{text}</p>
      <button
        data-testid="button"
        onClick={() => {
          setMessage({ text: "test message" });
        }}
      >
        BTN
      </button>
    </>
  );
};

describe("MessageProvider", () => {
  beforeEach(() => {
    render(
      <MessageProvider>
        <TestingComponent />
      </MessageProvider>
    );
  });
  test("MessageContextが子コンポーネントを表示する", () => {
    expect(screen.getByTestId("text")).toHaveTextContent("");
  });

  test("buttonをクリックすると`test message`と表示される", () => {
    const button = screen.getByTestId("button");

    fireEvent.click(button);
    expect(screen.getByTestId("text")).toHaveTextContent("test message");
  });
});
