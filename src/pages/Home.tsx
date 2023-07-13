import { Layout } from "../components/Layout";
import { CreatePostForm } from "../tdd-with-rhf-zod/CreatePostForm";

export const HomePage: React.FC = () => {
  return (
    <Layout title="Home">
      <div>
        <CreatePostForm
          handleSubmitPost={(data) => console.log(data, "が定義されています")}
        />
      </div>
    </Layout>
  );
};
