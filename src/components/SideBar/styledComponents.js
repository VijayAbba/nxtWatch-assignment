import styled from 'styled-components'

export const SideBarContainer = styled.div`
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
    background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
    height: 90vh;
    width: 230px;
    color: ${props => (props.isDark ? '#ffffff' : '#000000')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  /* Large */
  @media screen and (min-width: 992px) {
  }
  /* Extra Large */
  @media screen and (min-width: 1200px) {
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
`

export const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContactUsHeading = styled.h1`
  font-size: 18px;
`

export const ContactListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContactListItem = styled.li`
  list-style-type: none;
  margin: 10px;
`

export const ContactImage = styled.img`
  width: 30px;
`
export const ContactText = styled.p`
  text-align: center;
  width: 200px;
`