import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./sections";
import { CustomCursor } from "./components";
import { CustomCursorProvider } from "./context/customCursor/customCursor.context";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./routes/Home"));
const Portfolio = lazy(() => import("./routes/Portfolio"));
const Process = lazy(() => import("./routes/Process"));
const Contact = lazy(() => import("./routes/Contact"));
const Pricing = lazy(() => import("./routes/Pricing"));

function App() {
  return (
    <Suspense>
      <CustomCursorProvider>
        <CustomCursor />

        <Header />
        <AnimatePresence>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </CustomCursorProvider>
    </Suspense>
  );
}

export default App;
