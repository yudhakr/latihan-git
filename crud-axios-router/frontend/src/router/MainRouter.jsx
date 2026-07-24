import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home.jsx";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;
