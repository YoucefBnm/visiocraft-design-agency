import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import Contact from "./routes/Contact";
import { CustomCursorProvider } from "./context/customCursor/customCursor.context";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Process from "./routes/Process";
import { useScrollTop } from "./hooks/useScrollTop";

function App() {
  useScrollTop();
  return (
    <>
      <CustomCursorProvider>
        <CustomCursor />

        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/process" element={<Process />} />
        </Routes>
        <Footer />
      </CustomCursorProvider>
    </>
  );
}

export default App;
