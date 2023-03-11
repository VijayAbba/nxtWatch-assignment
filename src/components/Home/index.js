import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'

import {
  HomeContainer,
  SubContainer,
  HomeContentContainer,
  SearchCard,
  SearchInput,
  SearchButton,
  LoaderContainer,
  VideoListCard,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../SideBar'

import Banner from '../Banner'
import NxtWatchContext from '../../context/NxtWatchContext'
import VideoItemCard from '../VideoItemCard'

const HomeApiStatusConsonants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchText: '',
    videosData: [],
    apiStatus: HomeApiStatusConsonants.initial,
  }

  onHideBanner = () => {
    this.setState({showBanner: false})
  }

  getVideosData = async () => {
    this.setState({apiStatus: HomeApiStatusConsonants.pending})
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`

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
      console.log(videos)
      const updatedVideosData = videos.map(eachItem => ({
        channelName: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiStatus: HomeApiStatusConsonants.success,
        videosData: updatedVideosData,
      })
    } else if (response.status === 401) {
      this.setState({
        apiStatus: HomeApiStatusConsonants.failure,
      })
    }
  }

  componentDidMount = () => {
    this.getVideosData()
  }

  renderVideos = () => {
    const {videosData} = this.state

    return (
      <VideoListCard className="">
        {videosData.map(eachItem => (
          <VideoItemCard videoDetails={eachItem} key={eachItem.id} />
        ))}
      </VideoListCard>
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

  renderFinal = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case HomeApiStatusConsonants.pending:
        return this.renderLoader()
      case HomeApiStatusConsonants.success:
        return this.renderVideos()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeContainer>
              <Header />
              <SubContainer>
                <Sidebar />
                <HomeContentContainer isDark={isDark}>
                  {showBanner && <Banner onHideBanner={this.onHideBanner} />}

                  <SearchCard isDark={isDark}>
                    <SearchInput isDark={isDark} placeholder="Search" />
                    <SearchButton isDark={isDark}>
                      <BsSearch color={isDark ? '#ffffff' : '#181818'} />
                    </SearchButton>
                  </SearchCard>
                  {this.renderFinal()}
                </HomeContentContainer>
              </SubContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home

// https://apis.ccbp.in/videos/all?search=

// import {formatDistanceToNow} from 'date-fns'
// console.log(formatDistanceToNow(new Date(2021, 8, 20)))
// Return the distance between the given date and now in words.

// https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png

// https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png

// https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png alt should be no videos
