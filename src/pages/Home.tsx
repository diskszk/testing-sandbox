import { Layout } from "../components/Layout";
import { CreatePostPage } from "../tdd-with-rhf-zod/CreatePostPage";

export const HomePage: React.FC = () => {
  return (
    <Layout title="Home">
      <div>
        <CreatePostPage />
      </div>
    </Layout>
  );
};
