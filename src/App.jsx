import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Who from "./components/who";
import Services from "./components/services";
import Projects from "./components/projects";
import About from "./components/About";
import Development from "./components/Development";
import Home from "./components/Home";
import Contact from "./components/contact";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {path: '/', element: <Home />},
        { path: "/who", element: <Who /> },
        { path: "/contact", element: <Contact /> },
        { path: "/services", element: <Services /> },
        { path: '/projects', element: <Projects />},
        { path: '/about' , element: <About />},
        { path: '/development' , element: <Development />},
        { path: '/home' , element: <Home />},
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
