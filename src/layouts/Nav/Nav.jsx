import { Link, useNavigate } from 'react-router-dom'
import './Nav.scss'
import { Logo } from '../../assets'
import { navLinks } from '../../constants'
import { useState } from 'react'
import { CtaBtn } from '../../components'

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null)
  const handleClick = () => (active) => setActiveLink(active)
  return (
    <header className="nav pad--x-default pad--y-2 flex flex--align-center flex--justify-between">
      <Link to='/' className='flex--inline flex--center'>
        <img style={{ verticalAlign: 'middle'}} src={Logo} alt='visiocraft logo' />
      </Link>

      <nav className="flex flex--center gap--2">
        {
          navLinks.map(navLink => (
            <li key={navLink.id}>
              <a 
                className={navLink.title===activeLink ? 'link link--active' : 'link'}
                href={`#${navLink.id}`}
                onClick={() => setActiveLink(navLink.title)}
              >
                {navLink.title}
              </a>
            </li>
          ))
        }

        <Link to='/process'>
          <CtaBtn 
            btnStyle={'bg'}
            btnText='How it work'
          />
        </Link>
      </nav>
    </header>
  )
}

export default Nav