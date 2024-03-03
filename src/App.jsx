import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
