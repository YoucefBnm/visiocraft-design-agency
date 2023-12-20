import { useContext, useRef, useState } from "react"
import { CalculatorContext } from "../../context/calculator/calculator.context"
import { formatPrice } from "../../utils/formatPrice/formatPrice"
import { CtaBtn } from "../"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";

const Step1 = ({ totalPrice, step}) => (
  <div
    // animate={step===1 ? { x: 0 } : {x: '110%', opacity: 0}}
  >
    <h3 className="display display--sm">total price</h3>
    <motion.h2
      key={totalPrice}
      initial={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 80      
      }}
      animate={{ opacity: 1 }}
      className="display display--md text--center text--price overflow--hidden">
        ${totalPrice}.00
      </motion.h2>
  </div>

)

const Step2 = ({step}) => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [messageStatus, setMessageStatus] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = e => {
    e.preventDefault()
    
    setLoading(true)
    emailjs.send(
      'service_mhzb34r',
      'template_rn3m684',
      {
        from_name: form.email,
        from_email: form.email,
        message: form.message,
        to_name: "Youcef Bnm",
        to_email: "ssefbnm@gmail.com",
      },
      '9z708JsFxkxOqPt21'
    )
    .then(() => {
      setLoading(false)
      setMessageStatus('Thank you, I will get back to you sooner.')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      setMessageStatus('Something went wrong, try again !!')
    })
  }
  return (
    <motion.div 
    transition={{
      type: "spring",
      stiffness: 800,
      damping: 80
    }}
      animate={step===2 ? { x: 0 } : { x: '110%', opacity: 0}}>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex--col gap--1"
        >
          <input 
            type="text" 
            name='name' 
            onChange={handleChange}
            value={form.name}
            id="name" 
            placeholder="Your name" 
            className="input--form"
            required 
          />
          <input 
            type="email"
            name='email'
            onChange={handleChange}
            value={form.email}
            id='email'
            placeholder="Your email"
            className="input--form" 
            required
          />
          <textarea 
            name="message" 
            onChange={handleChange}
            value={form.message}
            id="message" 
            cols="30" 
            rows="10"
            placeholder="Your message..."
            className="input--textarea"
          >
          </textarea>

          {messageStatus && <p className="text--sm text--success">{messageStatus}</p>}
          <CtaBtn
            btnStyle={'bg'}
            btnType='submit'
            btnText={loading ? 'Sending' : 'Send'}
          />
        </form>
    </motion.div>
  )
}

const CalculatorTotal = () => {

    const { mainCategoryPrice, subCategoryPrice, additionalCategoryPrice } = useContext(CalculatorContext)
    
    const totalPrice = mainCategoryPrice + subCategoryPrice + additionalCategoryPrice
    const displayPrice = formatPrice(totalPrice)

    const [currentStep, setCurrentStep] = useState(1)

    const handleSteps = () => {
      if(currentStep===1) setCurrentStep(2)
      if(currentStep===2) setCurrentStep(1)
    }
  return (
    <div 
      className="calculatorTotal flex flex--col flex--justify-center gap--4 flex--align-center"
        style={{
          padding: '0 2rem 0 2rem',
          background: 'linear-gradient(180deg, rgba(56, 48, 227, 0.20) 99.45%, rgba(191, 148, 246, 0.05) 100%)',
          maxWidth: '29rem'
        }}
      >
        <div className="calculatorTotal__container flex flex--col flex--align-center gap--2">
          <Step1 step={currentStep} totalPrice={displayPrice} />
          <Step2 step={currentStep} />
        </div>
        
        <div className="calculatorTotal__btn flex flex--col flex--align-center gap--1">
          <CtaBtn
            btnText={currentStep===1 ? 'Next' : 'Back'}
            handleClick={handleSteps}
            btnStyle='bg'

          />
          <p className="text--sm text--center color--secondary-2">
            <sup>*</sup> You can add extra services during service discussion

          </p>
        </div>
    </div>
  )
}

export default CalculatorTotal