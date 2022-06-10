import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.page";
import { Plans } from "./pages/Plans/Plans.page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="plans" element={<Plans />} />
    </Routes>
  );
}
