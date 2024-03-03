import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
