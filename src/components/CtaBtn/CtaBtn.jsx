import './CtaBtn.scss'

const CtaBtn = ({ btnText, btnIcon, btnStyle, btnType, handleClick }) => {

  return (
    <button type={btnType} role='button' onClick={handleClick} className={`ctaBtn ctaBtn--${btnStyle}`}>
      <span>{btnText}</span>
      {btnIcon && (
        <span>
          <img src={btnIcon} aria-hidden='true' />
        </span>)}
    </button>
  )
}

export default CtaBtn