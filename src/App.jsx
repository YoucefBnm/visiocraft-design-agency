import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./sections";
import { CustomCursorProvider } from "./context/customCursor/customCursor.context";
import { CustomCursor, Loader } from "./components";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import RouteTransition from "./hoc/RouteTransition";
import NotFound from "./routes/NotFound";

const Home = lazy(() => import("./routes/Home"));
const Process = lazy(() => import("./routes/Process"));
const Pricing = lazy(() => import("./routes/Pricing"));
const Contact = lazy(() => import("./routes/Contact"));
function App() {
  const location = useLocation();
  return (
    <>
      <CustomCursorProvider>
        <CustomCursor />
        <Header />
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <RouteTransition>
                    <Home />
                  </RouteTransition>
                }
              />
              <Route
                path="/process"
                element={
                  <RouteTransition>
                    <Process />
                  </RouteTransition>
                }
              />
              <Route
                path="/pricing"
                element={
                  <RouteTransition>
                    <Pricing />
                  </RouteTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <RouteTransition>
                    <Contact />
                  </RouteTransition>
                }
              />

              <Route
                path="*"
                element={
                  <RouteTransition>
                    <NotFound />
                  </RouteTransition>
                }
              />
            </Routes>
            <Footer />
          </AnimatePresence>
        </Suspense>
      </CustomCursorProvider>
    </>
  );
}

export default App;
