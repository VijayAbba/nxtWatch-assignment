import {Component} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../SideBar'

import {SavedVideosContainer, SubContainer} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SavedVideosContainer>
              <Header />
              <SubContainer>
                <Sidebar />
                <h1 className="">Games</h1>
              </SubContainer>
            </SavedVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
