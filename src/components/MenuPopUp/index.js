import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoCloseOutline} from 'react-icons/io5'
import Sidebar from '../SideBar'

import {StyledPopup, ThemeButton, CloseButtonCard} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const MenuPopUp = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <div className="popup-container">
          <StyledPopup
            modal
            isDark={isDark}
            trigger={
              <ThemeButton>
                <GiHamburgerMenu
                  size="30"
                  color={isDark ? '#ffffff' : '#000000'}
                />
              </ThemeButton>
            }
          >
            {close => (
              <>
                <CloseButtonCard>
                  <IoCloseOutline
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                    color={isDark ? '#ffffff' : '#000000'}
                    size="30"
                  >
                    Close
                  </IoCloseOutline>
                </CloseButtonCard>
                <div className="">
                  <Sidebar Mobile />
                </div>
              </>
            )}
          </StyledPopup>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default MenuPopUp
