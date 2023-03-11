import {
  ListContainer,
  SideBarContainer,
  ContactUsContainer,
  ContactUsHeading,
  ContactListContainer,
  ContactListItem,
  ContactImage,
  ContactText,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import ListItem from '../SideBarItems'

const sideBarList = [
  {id: 'HOME', displayText: 'Home', link: '/'},
  {id: 'TRENDING', displayText: 'Trending', link: '/trending'},
  {id: 'GAMING', displayText: 'Gaming', link: '/gaming'},
  {id: 'SAVEDVIDEOS', displayText: 'Saved Videos', link: '/savedvideos'},
]

const Sidebar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, activeWindow} = value

      const {Mobile} = props

      return (
        <SideBarContainer Mobile={Mobile} isDark={isDark}>
          <ListContainer>
            {sideBarList.map(eachItem => (
              <ListItem
                key={eachItem.id}
                itemDetails={eachItem}
                activeWindow={activeWindow}
              />
            ))}
          </ListContainer>
          <ContactUsContainer Mobile={Mobile}>
            <ContactUsHeading>CONTACT US</ContactUsHeading>
            <ContactListContainer>
              <ContactListItem>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </ContactListItem>
              <ContactListItem>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </ContactListItem>
              <ContactListItem>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactListItem>
            </ContactListContainer>
            <ContactText>
              Enjoy! Now to see your channels and recommendations!
            </ContactText>
          </ContactUsContainer>
        </SideBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
