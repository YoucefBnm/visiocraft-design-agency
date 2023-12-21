
const FeatureCard = ({ icon, title, paragraph}) => {
  return (
    <div className="features__card pad--x-1 pad--y-4 flex flex--col flex--center gap--2 text--center bg--dark-3">
        <div className="features__card--icon flex flex--center">
            <img src={icon} aria-hidden='true' />
        </div>
        <h4 className="display display--xs">{title}</h4>
        <p className='text--sm'>{paragraph}</p>
    </div>
  )
}

export default FeatureCard