import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/home/Home.tsx";
import About from "@pages/about/About.tsx";
import Project from "@pages/project/Project.tsx";
import ProjectDetails from "@pages/project/ProjectDetails.tsx";
import Contact from "@pages/contact/Contact.tsx";
import MainLayout from "@layouts/MainLayout.tsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Project /> },
      { path: "/projects/:id", element: <ProjectDetails /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
