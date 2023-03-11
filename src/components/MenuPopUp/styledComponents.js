import styled from 'styled-components'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content {
    color: ${props => (props.isDark ? '#ffffff' : '#000000')};
    background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
    border-width: 0px;
    height: 100vh;
    width: 100vw;
  }
`

export const ThemeButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`

export const CloseButtonCard = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
