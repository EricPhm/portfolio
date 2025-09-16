import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
