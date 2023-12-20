import {  BrowserRouter as Router,Route,  Routes, useLocation } from 'react-router-dom';
import { Contact, Home } from '../routes';
import { AnimatePresence } from 'framer-motion';
import { Nav } from '../layouts';
const AnimatedRoutes = () => {
    

  return (
    <AnimatePresence mode='wait'>
        <Router location={location} key={location.pathname}>
            <Nav />
            <Contact />
            <Routes>
                <Route  index element={<Home />} />
                {/* <Route path='/contact' element={<Contact />} /> */}
                
            </Routes>
        </Router>
    </AnimatePresence>
  )
}

export default AnimatedRoutes