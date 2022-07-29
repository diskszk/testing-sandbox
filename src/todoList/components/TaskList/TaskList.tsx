import { useTasks } from "../../hooks";
import styles from "./TaskList.module.scss";

export const TaskList: React.FC = () => {
  const { state, changeDone, deleteTask } = useTasks();

  if (!state.length) {
    return <p>タスクが存在しません。</p>;
  }

  return (
    <ul className={styles.task_list}>
      {state.map((task) => (
        <li key={task.id} className={styles.task_list_item}>
          <p
            data-testid={`task:${task.id}`}
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.text}
          </p>
          <button onClick={() => changeDone(task.id)}>done</button>
          <button onClick={() => deleteTask(task.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};
