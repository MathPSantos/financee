import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.page";
import { Plans } from "./pages/Plans/Plans.page";
import { CompoundInterest } from "./pages/Simulators/CompoundInterest";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route
        path="/simulators/compound-interest"
        element={<CompoundInterest />}
      />
    </Routes>
  );
}
