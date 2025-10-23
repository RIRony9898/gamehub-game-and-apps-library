import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./AuthContexts/AuthProvider.jsx";
import { InstallationProvider } from "./context/InstallationContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <InstallationProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </InstallationProvider>
    </AuthProvider>
  </StrictMode>
);
