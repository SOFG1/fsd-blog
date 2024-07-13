import React from "react";
import { BrowserRouter } from "react-router-dom";

export const Providers = ({ children }: any) => {
  return (
    <React.StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </React.StrictMode>
  );
};
