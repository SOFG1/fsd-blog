import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { ArticleEdit } from "../../pages/ArticleEdit";
import { ArticleRead } from "../../pages/ArticleRead";
import { Profile } from "../../pages/Profile";
import { Settings } from "../../pages/Settings";
import { SignIn } from "../../pages/SignIn";
import { routes } from "../../shared";

const RoutesList = [
  { path: routes.Home, element: <Home /> },
  { path: routes.ArticleEdit, element: <ArticleEdit /> },
  { path: routes.Article, element: <ArticleRead /> },
  { path: routes.Profile, element: <Profile /> },
  { path: routes.Settings, element: <Settings /> },
  { path: routes.SignIn, element: <SignIn /> },
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
