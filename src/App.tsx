import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const Education = lazy(() => import("./pages/Education"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
