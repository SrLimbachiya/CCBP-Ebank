import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import {
  LoginForm,
  LoginFormContainer,
  LoginMain,
  LoginImg,
  Label,
  FormInput,
  FormHeading,
  SubmitBtn,
  LoginError,
} from './StyledComponent'

class Login extends Component {
  state = {userId: '', pin: '', errorMsg: '', showError: false}

  onLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const apiBody = {user_id: parseInt(userId), pin: parseInt(pin)}
    const loginApi = 'https://apis.ccbp.in/ebank/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(apiBody),
    }
    const response = await fetch(loginApi, option)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErr: true, errorMsg})
  }

  onUsername = e => {
    this.setState({userId: e.target.value, showError: false})
  }

  onPin = e => {
    this.setState({pin: e.target.value, showError: false})
  }

  render() {
    const {errorMsg, showError} = this.state
    const myToken = Cookie.get('jwt_token')
    if (myToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMain>
        <LoginFormContainer>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginForm onSubmit={this.onLogin}>
            <FormHeading>Welcome Back!</FormHeading>
            <Label htmlFor="username">User ID</Label>
            <FormInput
              onChange={this.onUsername}
              placeholder="Enter User ID"
              id="username"
              type="text"
            />
            <Label htmlFor="pin">Pin</Label>
            <FormInput
              onChange={this.onPin}
              placeholder="Enter Pin"
              id="pin"
              type="password"
            />
            <SubmitBtn type="submit">Login</SubmitBtn>
            {showError && <LoginError>{errorMsg}</LoginError>}
          </LoginForm>
        </LoginFormContainer>
      </LoginMain>
    )
  }
}

export default Login
