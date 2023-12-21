import { Link } from 'react-router-dom'
import './Nav.scss'
import { Logo } from '../../assets'
import { CtaBtn } from '../../components'

const Nav = () => {
  return (
    <header className="nav pad--x-default pad--y-2 flex flex--align-center flex--justify-between">
      <Link to='/' className='flex--inline flex--center nav__logo'>
        <img style={{ verticalAlign: 'middle'}} src={Logo} alt='visiocraft logo' />
      </Link>

      <nav className="flex flex--center gap--2">
        

        <Link to='/contact'>
          <CtaBtn 
            btnStyle={'bg ctaBtn--bg--primary'}
            btnText="Let's Talk"
          />
        </Link>
      </nav>
    </header>
  )
}

export default Nav