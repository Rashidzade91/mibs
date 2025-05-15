import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Development from "./pages/Development";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MeetUs from "./pages/MeetUs";


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
