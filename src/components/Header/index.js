import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {Link, withRouter} from 'react-router-dom'

import MenuPopUp from '../MenuPopUp'
import {
  HeaderContainer,
  HeaderLogoImg,
  HeaderButtonsCard,
  HeaderListItem,
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
          <Link to="/">
            <HeaderLogoImg className="" src={logoUrl} alt="website logo" />
          </Link>
          <HeaderButtonsCard>
            <HeaderListItem>
              <ThemeButton onClick={onChangeTheme} data-testid="theme">
                {isDark ? (
                  <BiSun size="40" color="#ffffff" />
                ) : (
                  <FaMoon size="40" color="#000000" />
                )}
              </ThemeButton>
            </HeaderListItem>
            <HeaderListItem>
              <ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ThemeButton>
            </HeaderListItem>
            <HeaderListItem>
              <LogoutPopUp />
            </HeaderListItem>
          </HeaderButtonsCard>
          <HeaderButtonsCardMobile>
            <HeaderListItem>
              <ThemeButton onClick={onChangeTheme}>
                {isDark ? (
                  <BiSun size="30" color="#ffffff" />
                ) : (
                  <FaMoon size="30" color="#000000" />
                )}
              </ThemeButton>
            </HeaderListItem>
            <HeaderListItem>
              <MenuPopUp />
            </HeaderListItem>
            <HeaderListItem>
              <LogoutPopUp mobile />
            </HeaderListItem>
          </HeaderButtonsCardMobile>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
