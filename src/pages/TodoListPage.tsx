import { Layout } from "../components/Layout";
import { TaskForm } from "../todoList/components/TaskForm";

export const TodoListPage: React.FC = () => {
  return (
    <Layout title="todolist">
      <div>todo</div>
      <TaskForm />
    </Layout>
  );
};
