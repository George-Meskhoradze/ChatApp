import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/mainpage" element={<MainPage />} />
    </Routes>
  );
};

export default Routers;
