import {withRouter} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {
  LogoutButton,
  PopUpDetailsCard,
  ButtonsCard,
  ConfirmButton,
  CancelButton,
  StyledPopup,
  ThemeButton,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const LogoutPopUp = props => {
  const {mobile} = props
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        const showButton = mobile ? (
          <ThemeButton>
            <FiLogOut size="30" color={isDark ? '#ffffff' : '#000000'} />
          </ThemeButton>
        ) : (
          <LogoutButton
            isDark={isDark}
            type="button"
            className="trigger-button"
          >
            Logout
          </LogoutButton>
        )

        return (
          <div className="popup-container">
            <StyledPopup
              isDark={isDark}
              modal
              trigger={showButton}
              className="popup-content"
            >
              {close => (
                <PopUpDetailsCard>
                  <div>
                    <p>Are you sure, you want to logout</p>
                  </div>
                  <ButtonsCard>
                    <CancelButton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton onClick={onLogout} type="button">
                      Confirm
                    </ConfirmButton>
                  </ButtonsCard>
                </PopUpDetailsCard>
              )}
            </StyledPopup>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(LogoutPopUp)
