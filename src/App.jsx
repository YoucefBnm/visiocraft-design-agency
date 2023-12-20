import './App.scss'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Contact, Home, Process } from './routes';
import { Footer, Nav } from './layouts';
import { CustomCursorProvider } from './context/customCursor/customCursor.context';
import { Fragment } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CustomCursor } from './components';

function App() {

  const location = useLocation()
  return (
    <>
      <CustomCursorProvider>
        <Nav />
        <CustomCursor />

          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/process' element={<Process />} />
            </Routes>
          </AnimatePresence>

          <Footer />
      </CustomCursorProvider>
    </>
  )
}

export default App
