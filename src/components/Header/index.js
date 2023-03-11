import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'

import MenuPopUp from '../MenuPopUp'
import {
  HeaderContainer,
  HeaderLogoImg,
  HeaderButtonsCard,
  ThemeButton,
  ProfileImage,
  HeaderButtonsCardMobile,
} from './styledComponents'

import LogoutPopUp from '../LogoutPopUp'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = () => (
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

            <LogoutPopUp />
          </HeaderButtonsCard>
          <HeaderButtonsCardMobile>
            <ThemeButton onClick={onChangeTheme}>
              {isDark ? (
                <BiSun size="30" color="#ffffff" />
              ) : (
                <FaMoon size="30" color="#000000" />
              )}
            </ThemeButton>

            <MenuPopUp />
            <LogoutPopUp mobile />
          </HeaderButtonsCardMobile>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
