import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import Contact from "./routes/Contact";
import { CustomCursorProvider } from "./context/customCursor/customCursor.context";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  return (
    <>
      <CustomCursorProvider>
        <CustomCursor />

        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </CustomCursorProvider>
    </>
  );
}

export default App;
