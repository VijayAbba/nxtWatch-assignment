import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtWatchContext'
import FailureCard from '../FailureCard'

import Header from '../Header'
import Sidebar from '../SideBar'
import VideoItemCard from '../VideoItemCard'

import {
  TrendingContainer,
  SubContainer,
  LoaderContainer,
  TrendingContentContainer,
  TrendingPageTopCard,
  FireCard,
  TrendingPageHeading,
  VideoListCard,
} from './styledComponents'

const VideoApiStatusConsonants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: VideoApiStatusConsonants.initial}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: VideoApiStatusConsonants.pending})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const {videos} = fetchedData
      const updatedVideosData = videos.map(eachItem => ({
        channelName: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        fromDistance: formatDistanceToNow(new Date(eachItem.published_at)),
      }))

      this.setState({
        apiStatus: VideoApiStatusConsonants.success,
        trendingVideos: updatedVideosData,
      })
    } else if (response.status === 400) {
      this.setState({
        apiStatus: VideoApiStatusConsonants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state

    // const {
    //   channelName,
    //   profileImageUrl,
    //   id,
    //   publishedAt,
    //   thumbnailUrl,
    //   title,
    //   viewCount,
    //   fromDistance,
    // } = trendingVideos

    return (
      <TrendingContentContainer>
        <TrendingPageTopCard>
          <FireCard>
            <HiFire size="30" color="red" />
          </FireCard>
          <TrendingPageHeading>Trending</TrendingPageHeading>
        </TrendingPageTopCard>
        <VideoListCard className="">
          {trendingVideos.map(eachItem => (
            <VideoItemCard videoDetails={eachItem} key={eachItem.id} trending />
          ))}
        </VideoListCard>
      </TrendingContentContainer>
    )
  }

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

  renderFailureView = () => <FailureCard retryData={this.getVideoData} />

  renderFinal = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case VideoApiStatusConsonants.pending:
        return this.renderLoader()
      case VideoApiStatusConsonants.success:
        return this.renderSuccessView()
      case VideoApiStatusConsonants.failure:
        return this.renderFailureView()
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
            <TrendingContainer isDark={isDark}>
              <Header />
              <SubContainer>
                <Sidebar />
                {this.renderFinal()}
              </SubContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
