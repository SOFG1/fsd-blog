import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ArticleEdit } from "../pages/ArticleEdit";
import { ArticleRead } from "../pages/ArticleRead";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { SignIn } from "../pages/SignIn";

const RoutesList = [
  { path: "/", element: <Home /> },
  { path: "/article-edit", element: <ArticleEdit /> },
  { path: "/article", element: <ArticleRead /> },
  { path: "/article-edit", element: <ArticleEdit /> },
  { path: "/profile", element: <Profile /> },
  { path: "/settings", element: <Settings /> },
  { path: "/sign-in", element: <SignIn /> },
];

export const AppRouter = () => {
  return (
    <Routes>
      {RoutesList.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};
