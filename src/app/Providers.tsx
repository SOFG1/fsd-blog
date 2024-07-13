import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

export const Providers = ({ children }: any) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Layout>{children}</Layout>
      </BrowserRouter>
    </React.StrictMode>
  );
};
