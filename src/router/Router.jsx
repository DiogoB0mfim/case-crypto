import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;