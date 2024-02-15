import React from "react";

import AppRoutes from "./components/utils/AppRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const API_URL = "https://65c85c08a4fbc162e111b509.mockapi.io/blogs";
function App() {
  const router = createBrowserRouter(AppRoutes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
