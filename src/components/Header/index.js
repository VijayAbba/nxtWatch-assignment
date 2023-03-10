import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import {
  HeaderContainer,
  HeaderLogoImg,
  HeaderButtonsCard,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  HeaderButtonsCardMobile,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, onToggleTheme} = value

        const onChangeTheme = () => {
          onToggleTheme()
        }

        const logoUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <HeaderContainer isDark={isDark}>
            <HeaderLogoImg className="" src={logoUrl} alt="" />
            <HeaderButtonsCard>
              <ThemeButton onClick={onChangeTheme}>
                {isDark ? (
                  <BiSun size="40" color="#ffffff" />
                ) : (
                  <FaMoon size="40" color="#000000" />
                )}
              </ThemeButton>
              <ThemeButton>
                <ProfileImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
              </ThemeButton>
              <LogoutButton onClick={onLogout} isDark={isDark}>
                Logout
              </LogoutButton>
            </HeaderButtonsCard>
            <HeaderButtonsCardMobile>
              <ThemeButton onClick={onChangeTheme}>
                {isDark ? (
                  <BiSun size="30" color="#ffffff" />
                ) : (
                  <FaMoon size="30" color="#000000" />
                )}
              </ThemeButton>
              <ThemeButton>
                <GiHamburgerMenu
                  size="30"
                  color={isDark ? '#ffffff' : '#000000'}
                />
              </ThemeButton>
              <ThemeButton>
                <FiLogOut size="30" color={isDark ? '#ffffff' : '#000000'} />
              </ThemeButton>
            </HeaderButtonsCardMobile>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
