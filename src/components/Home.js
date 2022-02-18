import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import {
  HomeMain,
  LogoutBtn,
  NavBar,
  HomeDataContainer,
  HomeHeading,
  HomeCardImg,
} from './StyledComponent'

const Home = props => {
  const {history} = props
  const logout = () => {
    Cookie.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const myToken = Cookie.get('jwt_token')
  if (myToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <HomeMain>
      <NavBar>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutBtn onClick={logout} type="button">
          Logout
        </LogoutBtn>
      </NavBar>
      <HomeDataContainer>
        <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
        <HomeCardImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeDataContainer>
    </HomeMain>
  )
}

export default Home
