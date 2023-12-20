import { motion } from "framer-motion"

const Transition = (Component) => 
    function Hoc() {
        return (
            <>
                <Component />

                <motion.div
                    className="slide-in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        background: '#DBD3D8',
                        transformOrigin: 'bottom'
                    }}
                />
                <motion.div
                    className="slide-out"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        background: '#DBD3D8',
                        transformOrigin: 'top'
                    }}
                />
            </>
        )
    }


export default Transition