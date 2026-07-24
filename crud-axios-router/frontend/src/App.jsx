import { Routes, Route, BrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import CrudAxios from "./pages/CrudAxios.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Home from "./pages/Home.jsx";
import NoMatch from "./pages/NoMatch.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="crud-axios" element={<CrudAxios />} />
          <Route path="Category" element={<CategoryPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
