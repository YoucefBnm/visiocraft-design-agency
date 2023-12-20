import { motion } from "framer-motion"
import './Pattern.scss'
import { patternBoxSpringConfig } from "../../libs/motion/motion.variants"

const PatternBox = ({path, delay, bg}) => {

    return (
        <motion.div 
            className={`pattern__box ${bg}`}
            animate={{offsetDistance: '100%'}}
            transition={{
                ...patternBoxSpringConfig,
                delay: delay
            }}
            style={{
                offsetPath: `path("${path}")`,
            }}
        />
    )
}

const Pattern = () => {

    return (
        <div className="pattern pos--relative">
            <div className="pattern__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="440" height="440" viewBox="0 0 440 440" fill="none">
                    <g filter="url(#filter0_i_73_394)">
                        <path d="M439.6 220C439.6 341.282 341.282 439.6 220 439.6C98.7183 439.6 0.4 341.282 0.4 220C0.4 98.7183 98.7183 0.4 220 0.4C341.282 0.4 439.6 98.7183 439.6 220Z" stroke="url(#paint0_linear_73_394)" strokeWidth="0.8"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_73_394" x="0" y="0" width="440" height="445.333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="5.33333"/>
                        <feGaussianBlur stdDeviation="4"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_73_394"/>
                        </filter>
                        <linearGradient id="paint0_linear_73_394" x1="220" y1="0" x2="220" y2="440" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#707070"/>
                        <stop offset="1" stopColor="#786D6F" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="pattern__item">
                <svg xmlns="http://www.w3.org/2000/svg" width={330} height={330} viewBox='0 0 330 330' fill="none">
                    <g filter="url(#filter0_i_17_257)">
                        <path d="M329.7 165C329.7 255.961 255.961 329.7 165 329.7C74.0387 329.7 0.3 255.961 0.3 165C0.3 74.0387 74.0387 0.3 165 0.3C255.961 0.3 329.7 74.0387 329.7 165Z" stroke="url(#paint0_linear_17_257)" strokeWidth="0.6"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_17_257" x="0" y="0" width="330" height="334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_17_257"/>
                        </filter>
                        <linearGradient id="paint0_linear_17_257" x1="165" y1="0" x2="165" y2="330" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#707070"/>
                        <stop offset="1" stopColor="#786D6F" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>

                <PatternBox 
                    path={'M329.7 165C329.7 255.961 255.961 329.7 165 329.7C74.0387 329.7 0.3 255.961 0.3 165C0.3 74.0387 74.0387 0.3 165 0.3C255.961 0.3 329.7 74.0387 329.7 165Z'} 
                    delay={2}
                    bg='bg--dark-2'
                />
            </div>

            <div className="pattern__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="242" height="242" viewBox="0 0 242 242" fill="none">
                    <g filter="url(#filter0_i_73_394)">
                        <path d="M241.6 121C241.6 187.606 187.606 241.6 121 241.6C54.3945 241.6 0.4 187.606 0.4 121C0.4 54.3945 54.3945 0.4 121 0.4C187.606 0.4 241.6 54.3945 241.6 121Z" stroke="url(#paint0_linear_73_394)" strokeWidth="0.8"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_73_394" x="0" y="0" width="242" height="247.333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="5.33333"/>
                        <feGaussianBlur stdDeviation="4"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_73_394"/>
                        </filter>
                        <linearGradient id="paint0_linear_73_394" x1="121" y1="0" x2="121" y2="242" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#AB9B9E" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>

                <PatternBox 
                    path={'M241.6 121C241.6 187.606 187.606 241.6 121 241.6C54.3945 241.6 0.4 187.606 0.4 121C0.4 54.3945 54.3945 0.4 121 0.4C187.606 0.4 241.6 54.3945 241.6 121Z'} 
                    delay={4}
                    bg='bg--accent-2'
                />
            </div>

            <div className="pattern__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="167" height="167" viewBox="0 0 167 167" fill="none">
                    <circle cx="83.5" cy="83.5" r="83.5" fill="black" fillOpacity="0.4"/>
                </svg>
            </div>
        </div>
    )
}

export default Pattern