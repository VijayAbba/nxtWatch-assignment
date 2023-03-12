import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
import FailureCard from '../FailureCard'

import Header from '../Header'
import Sidebar from '../SideBar'

import {
  GamingContainer,
  SubContainer,
  LoaderContainer,
} from './styledComponents'

const VideoApiStatusConsonants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Gaming extends Component {
  state = {gamingData: [], apiStatus: VideoApiStatusConsonants.initial}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: VideoApiStatusConsonants.pending})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

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
        id: eachItem.id,

        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        apiStatus: VideoApiStatusConsonants.success,
        gamingData: updatedVideosData,
      })
    } else if (response.status === 400) {
      this.setState({
        apiStatus: VideoApiStatusConsonants.failure,
      })
    }
  }

  renderSuccessView = () => <h1 className="">Success</h1>

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
            <GamingContainer isDark={isDark}>
              <Header />
              <SubContainer>
                <Sidebar />
                {this.renderFinal()}
              </SubContainer>
            </GamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
