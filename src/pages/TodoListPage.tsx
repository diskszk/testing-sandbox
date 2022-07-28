import { Layout } from "../components/Layout";
import { TaskForm } from "../todoList/components/TaskForm";
import { TaskList } from "../todoList/components/TaskList/TaskList";
import { TasksProvider } from "../todoList/context/TasksProvider";

export const TodoListPage: React.FC = () => {
  return (
    <Layout title="todolist">
      <TasksProvider>
        <TaskForm />
        <TaskList />
      </TasksProvider>
    </Layout>
  );
};
