import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import { CustomCursorProvider } from "./context/customCursor/customCursor.context";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { useScrollTop } from "./hooks/useScrollTop";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./routes/Home"));
const Contact = lazy(() => import("./routes/Contact"));
const Process = lazy(() => import("./routes/Process"));

function App() {
  useScrollTop();

  return (
    <>
      <CustomCursorProvider>
        <CustomCursor />

        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loader />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/process"
              element={
                <Suspense fallback={<Loader />}>
                  <Process />
                </Suspense>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </CustomCursorProvider>
    </>
  );
}

export default App;
