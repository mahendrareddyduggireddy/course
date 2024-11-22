import './index.css'
import {withRouter} from 'react-router-dom'

const Header = props => {
  const {history} = props
  const btnFunc = () => {
    history.replace('/')
  }
  return (
    <nav className="nav-container">
      <button onClick={btnFunc} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          height={60}
          width={70}
        />
      </button>
    </nav>
  )
}
export default withRouter(Header)
