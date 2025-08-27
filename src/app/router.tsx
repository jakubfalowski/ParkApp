import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./app-layout";
import { RootPage } from "./root-page";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [{ index: true, element: <RootPage /> }],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
