import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Datenschutz } from "./pages/Datenschutz";
import { Home } from "./pages/Home";
import { Impressum } from "./pages/Impressum";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
      </Route>
    </Routes>
  );
}
