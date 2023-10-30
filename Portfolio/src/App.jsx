import { Suspense, lazy } from "react";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import { AnimatePresence } from "framer-motion";
/* lazy loaded components */
const Hero = lazy(() => import("./components/hero/Hero"));
const Aboutme = lazy(() => import("./components/aboutme/Aboutme"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path="aboutme" element={<Aboutme />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
