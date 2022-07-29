import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
  title: string;
};
export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{`testing sandbox | ${title}`}</title>
      </Helmet>
      <Header heading={title} />
      <div className="content">{children}</div>
    </>
  );
};
