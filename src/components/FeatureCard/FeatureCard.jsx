import './FeatureCard.scss'

const FeatureCard = ({ icon, title, paragraph}) => {
  return (
    <div className="featureCard pad--x-1 pad--y-4 flex flex--col flex--center gap--2 text--center">
        <div className="featureCard__icon">
            <img src={icon} aria-hidden='true' />
        </div>
        <h3 className="display display--sm">{title}</h3>
        <p className='text--md'>{paragraph}</p>
    </div>
  )
}

export default FeatureCard