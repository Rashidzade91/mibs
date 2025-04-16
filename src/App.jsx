import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Portfolio from "./components/portfolio";
import Who from "./components/who";
import Services from "./components/services";
import Projects from "./components/projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {path: '/', element: <Who />},
        { path: "/who", element: <Who /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/services", element: <Services /> },
        { path: '/projects', element: <Projects />}
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
