import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import RecipePage from "./components/pages/RecipePage";
import ErrorPage from "./components/pages/ErrorPage";
import Instructions from "./components/Instructions";
import Ingredients from "./components/Ingredients";
const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe/:id" element={<RecipePage />}>
          <Route path="/recipe/:id/instructions" element={<Instructions />} />
          <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
        </Route>
      </Route>
    </React.Fragment>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
