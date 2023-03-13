import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../SideBar'
import VideoItemCard from '../VideoItemCard'

import {
  SavedVideosContainer,
  SubContainer,
  LoaderContainer,
  SavedContentContainer,
  SavedPageTopCard,
  FireCard,
  SavedPageHeading,
  VideoListCard,
  NoSavedCard,
  NoSavedImg,
  NoSavedHeading,
  NoSavedText,
} from './styledComponents'

const VideoApiStatusConsonants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Trending extends Component {
  state = {apiStatus: VideoApiStatusConsonants.success}

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        if (savedVideosList.length === 0) {
          return this.noSavedVideos()
        }

        return (
          <SavedContentContainer>
            <SavedPageTopCard isDark={isDark}>
              <FireCard>
                <HiFire size="30" color="red" />
              </FireCard>
              <SavedPageHeading>Saved Videos</SavedPageHeading>
            </SavedPageTopCard>
            <VideoListCard className="">
              {savedVideosList.map(eachItem => (
                <VideoItemCard
                  videoDetails={eachItem}
                  key={eachItem.id}
                  trending
                />
              ))}
            </VideoListCard>
          </SavedContentContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoader = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#ffffff' : '#000000'}
                height="50"
                width="50"
              />
            </div>
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  noSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSavedCard isDark={isDark}>
            <NoSavedImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedHeading>No saved videos found</NoSavedHeading>
            <NoSavedText>
              You can save your videos while watching them
            </NoSavedText>
          </NoSavedCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFinal = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case VideoApiStatusConsonants.pending:
        return this.renderLoader()
      case VideoApiStatusConsonants.success:
        return this.renderSuccessView()
      case VideoApiStatusConsonants.failure:
        return this.noSavedVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SavedVideosContainer isDark={isDark}>
              <Header />
              <SubContainer>
                <Sidebar />
                {this.renderFinal()}
              </SubContainer>
            </SavedVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
