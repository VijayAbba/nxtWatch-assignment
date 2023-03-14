import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../SideBar'
import {
  NotFoundContainer,
  SubContainer,
  NotFoundCard,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <NotFoundContainer isDark={isDark}>
          <Header />
          <SubContainer>
            <Sidebar />
            <NotFoundCard>
              <NotFoundImg
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt=""
              />
              <NotFoundHeading>Page Not Found</NotFoundHeading>
              <NotFoundText>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundCard>
          </SubContainer>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound

//

//
