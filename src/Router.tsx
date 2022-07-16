import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TimeZonesPage } from "./pages/TimeZones";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="timezones" element={<TimeZonesPage />} />
    </Routes>
  </BrowserRouter>
);
