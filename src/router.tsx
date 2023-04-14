import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Search from "./components/search";
import Login from "./components/auth/login";
import ApiTester from "./components/general/apiTester";
import Overview from "./components/history/overview";
import Compare from "./components/company/compare";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Compare /> },
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "api-test",
        element: <ApiTester />,
      },
      {
        path: "history",
        element: <Overview />,
      },
      {
        path: "profile",
        element: <Login />,
      },
    ],
  },
]);
