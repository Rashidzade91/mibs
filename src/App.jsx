import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ErrorPage from "./components/pages/ErrorPage";
import Layout from "./components/layout/Layout";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Development from "./components/pages/Development";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import MeetUs from "./components/pages/MeetUs";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {path: '/', element: <Home />},
        { path: "/meetUs", element: <MeetUs /> },
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
