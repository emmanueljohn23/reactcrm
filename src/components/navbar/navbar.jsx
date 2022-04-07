import './navbar.css'
import HamBurgerMenu from '../../assets/icons/hamburger-menu.svg'
import Github from '../../assets/icons/github.svg'

const NavBar = (props) => {
  return (
    <div className={`navbar  ${props.width ? 'nav-half' : 'nav-full'}`}>
      <span className="nav__title">
        <img
          className="hamburger-menu"
          src={HamBurgerMenu}
          alt="hamburger-menu"
          onClick={props.menuHandler}
        />
        <p>Demo</p>
      </span>

      <img className="github" src={Github} alt="github" />
    </div>
  )
}

export default NavBar
