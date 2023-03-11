import styled from 'styled-components'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border-radius: 4px;
  height: 40px;
  width: 80px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

export const PopUpDetailsCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonsCard = styled.div``

export const CancelButton = styled(LogoutButton)`
  background-color: transparent;
  border: 1px solid gray;
  color: gray;
  font-weight: normal;
  margin-right: 20px;
`

export const ConfirmButton = styled(LogoutButton)`
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: normal;
`

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content {
    color: ${props => (props.isDark ? '#ffffff' : '#000000')};
    background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
    padding: 10px;
    height: 180px;
    width: 280px;
    border-radius: 15px;
    border-width: 0px;
  }
`

export const ThemeButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`
