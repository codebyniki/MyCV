import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import '../tailwind.css';

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root container missing in index.html");
}

createRoot(rootElement).render(
    <StrictMode>
        <LandingPage />
    </StrictMode>
);
