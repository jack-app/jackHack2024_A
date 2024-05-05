import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Calendar from "./pages/Calendar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write/:date" render={(props) => <Write {...props} />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
