import styled from 'styled-components'

export const SideBarContainer = styled.div`
  //   width: 100vw;

  /* Extra Small */
  @media screen and (max-width: 575px) {
    display: ${props => (props.Mobile ? 'visible' : 'none')};
  }
  /* Small */
  @media screen and (min-width: 576px) {
    display: ${props => (props.Mobile ? 'visible' : 'none')};
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
  display: ${props => (props.Mobile ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContactUsHeading = styled.p`
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
