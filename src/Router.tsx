import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TimeZonesPage } from "./pages/TimeZones";
import { TodoListPage } from "./pages/TodoListPage";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="timezones" element={<TimeZonesPage />} />
      <Route path="todolist" element={<TodoListPage />} />
    </Routes>
  </BrowserRouter>
);
