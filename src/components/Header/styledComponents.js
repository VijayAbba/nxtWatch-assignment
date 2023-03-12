import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  position: fixed;
  top: 0;
  width: 100vw;
  /* Extra Small */
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  /* Small */
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  /* Medium */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 20px;
  }
  /* Large */
  @media screen and (min-width: 992px) {
  }
  /* Extra Large */
  @media screen and (min-width: 1200px) {
  }
`

export const HeaderLogoImg = styled.img`
  width: 130px;
`

export const HeaderButtonsCard = styled.div`
  /* Extra Small */
  @media screen and (max-width: 575px) {
    display: none;
  }
  /* Small */
  @media screen and (min-width: 576px) {
    display: none;
  }
  /* Medium */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  /* Large */
  @media screen and (min-width: 992px) {
  }
  /* Extra Large */
  @media screen and (min-width: 1200px) {
  }
`

export const ThemeButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  width: 40px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`

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

export const HeaderButtonsCardMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* Extra Small */
  @media screen and (max-width: 575px) {
  }
  /* Small */
  @media screen and (min-width: 576px) {
  }
  /* Medium */
  @media screen and (min-width: 768px) {
    display: none;
  }
  /* Large */
  @media screen and (min-width: 992px) {
  }
  /* Extra Large */
  @media screen and (min-width: 1200px) {
  }
`
