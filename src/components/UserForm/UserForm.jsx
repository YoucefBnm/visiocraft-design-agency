import './UserForm.scss'
import { Alert, CtaBtn, UserInput, UserTextarea } from '../'
import { useSetUserForm } from '../../hooks/useSetUserForm'
import { fadeVariants } from '../../libs/motion/motion.variants'

const UserForm = () => {
  const {
    formRef,
    formFields,
    loading,
    alert,
    handleFormFieldChange,
    handleFormSubmit
  } = useSetUserForm()

  const { show, text, type } = alert

  return (
    <form 
      ref={formRef} 
      onSubmit={handleFormSubmit}
      className='flex flex--col flex-center gap--1 form'
    >
      {show 
        ? <Alert variants={fadeVariants('top')} type={type} text={text} /> 
        : <Alert variants={{ opacity: 0}} />
      }
      <UserInput
        inputType='text'
        label='name'
        value={formFields.name}
        handleChange={handleFormFieldChange}
      />
      <UserInput
        inputType='email'
        label='email'
        value={formFields.email}
        handleChange={handleFormFieldChange}
      />
      <UserTextarea
        value={formFields.message}
        handleChange={handleFormFieldChange}
      />

      <CtaBtn
        btnStyle='shadow inline ctaBtn--shadow--primary'
        btnType='submit'
        btnText={loading ? 'Sending' : 'Send'}
      />
    </form>
  )
}

export default UserForm