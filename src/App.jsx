import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Biz_kimik from "./components/Biz_kimik";
import Portfolio from "./components/Portfolio";
import Xidmetler from "./components/Xidmetler";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {path: '/', element: <Biz_kimik />},
        { path: "/Biz_kimik", element: <Biz_kimik /> },
        { path: "/Portfolio", element: <Portfolio /> },
        { path: "/Xidmetler", element: <Xidmetler /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
