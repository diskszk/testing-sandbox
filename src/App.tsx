import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Router } from "./Router";

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </div>
    </QueryClientProvider>
  );
}
