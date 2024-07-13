import { Header } from "../shared";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
