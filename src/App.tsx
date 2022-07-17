import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import { Router } from "./Router";

export function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </div>
  );
}
