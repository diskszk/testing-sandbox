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

      <br />
      <article>
        <h1>タスク管理アプリ</h1>
        <p className="describe">
          ReactHooks の useContext / useReducer
          をstate管理に用いて作成したタスク管理アプリ。
          <br />
          また、テスト駆動開発に基づき、Red（失敗）、Green（成功）、Refactor（リファクタリング）のサイクルで開発した。
          <br />
          DBなどの外部リソースへのデータの保存は行っておらず、リロードすると初期化される。
          <br />
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://qiita.com/diskszk/items/cbdfa78f6a8bb988bee8"
          >
            作成した記事
          </a>
        </p>
      </article>
    </Layout>
  );
};
