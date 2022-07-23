import React, { useCallback, useState } from "react";
import { useTasks } from "../../hooks";

export const TaskForm: React.FC = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setText(ev.target.value);
    },
    []
  );

  const handleClick = useCallback(() => {
    const id = new Date().getTime();
    addTask({ id, text, done: false });
    setText("");
  }, []);

  return (
    <div>
      <label htmlFor="task">タスクを入力してください</label>
      <input type="text" id="task" value={text} onChange={handleChange} />
      <button onClick={handleClick} disabled={text ? false : true}>
        作成
      </button>
    </div>
  );
};
