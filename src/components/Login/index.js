import {Component} from 'react'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginContainer,
  LoginCard,
  LoginImage,
  LoginForm,
  InputCard,
  InputElement,
  LabelElement,
  CheckBoxElement,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    hidePassword: true,
    Username: '',
    Password: '',
    showErrorMessage: false,
    errorMsg: 'Error',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg, showErrorMessage: true})
  }

  onShowPassword = () => {
    this.setState(preState => ({hidePassword: !preState.hidePassword}))
  }

  onChangeUsername = event => {
    this.setState({Username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({Password: event.target.value})
  }

  onSubmitLogin = async event => {
    const {Username, Password} = this.state
    event.preventDefault()

    const userDetails = {username: Username, password: Password}

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else if (response.status === 400) {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      hidePassword,
      Username,
      Password,
      errorMsg,
      showErrorMessage,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          const ImageUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDark={isDark}>
              <LoginCard isDark={isDark}>
                <LoginImage src={ImageUrl} alt="website logo" />
                <LoginForm onSubmit={this.onSubmitLogin}>
                  <InputCard>
                    <LabelElement isDark={isDark} htmlFor="userName">
                      USERNAME
                    </LabelElement>
                    <InputElement
                      onChange={this.onChangeUsername}
                      id="userName"
                      type="text"
                      placeholder="Username"
                      value={Username}
                    />
                  </InputCard>
                  <InputCard>
                    <LabelElement isDark={isDark} htmlFor="password">
                      PASSWORD
                    </LabelElement>
                    <InputElement
                      onChange={this.onChangePassword}
                      id="password"
                      type={hidePassword ? 'password' : 'text'}
                      placeholder="Password"
                      value={Password}
                    />
                  </InputCard>
                  <InputCard row>
                    <CheckBoxElement
                      onChange={this.onShowPassword}
                      id="showPassword"
                      type="checkbox"
                    />
                    <LabelElement isDark={isDark} black htmlFor="showPassword">
                      Show Password
                    </LabelElement>
                  </InputCard>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMessage && <ErrorMessage>{errorMsg}</ErrorMessage>}
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
