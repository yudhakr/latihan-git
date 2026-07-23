import { BrowserRouter,Route,Routes } from "react-router";
import Home from "../pages/Home";
import  Category form "../pages/category/FormCategory.jsx"
import  Category form "../pages/category/TableCategory.jsx"


const MainRouter = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<AB />} /> */}
            <Route path="dashboard" element={<Dasboard />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    );
};

module.exports = MainRouter;