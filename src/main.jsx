import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);
