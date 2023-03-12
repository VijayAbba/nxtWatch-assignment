import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'

import {BiDislike, BiLike, BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import FailureCard from '../FailureCard'

import Header from '../Header'
import Sidebar from '../SideBar'
import {
  VideoDetailsPageContainer,
  SubContainer,
  LoaderContainer,
  VideoDetailCard,
  VideoPlayer,
  VideoTitle,
  VideoBelowDetailsCard,
  ViewsAndTimeCard,
  ViewsAndTimeItem,
  LikeDislikeSaveCard,
  HorizontalLine,
  ChannelDetailsCard,
  ChannelImg,
  ChannelNameAndSubscribersCard,
  ChannelName,
  SubscribersCount,
  Description,
  ButtonEl,
} from './styledComponents'

const VideoApiStatusConsonants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

const VideoStatusConsonants = {
  initial: 'INITIAL',
  like: 'LIKE',
  dislike: 'DISLIKE',
}

class VideoDetailsPage extends Component {
  state = {
    videoDetails: {},
    apiStatus: VideoApiStatusConsonants.initial,
    videoStatus: VideoStatusConsonants.initial,
  }

  componentDidMount() {
    this.getVideoData()
  }

  onVideoLike = () => {
    this.setState({videoStatus: VideoStatusConsonants.like})
  }

  onVideoDislike = () => {
    this.setState({videoStatus: VideoStatusConsonants.dislike})
  }

  getVideoData = async () => {
    this.setState({apiStatus: VideoApiStatusConsonants.pending})

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const videoDetails = fetchedData.video_details

      const updatedVideosData = {
        channelName: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        fromDistance: formatDistanceToNow(new Date(videoDetails.published_at)),
      }
      this.setState({
        apiStatus: VideoApiStatusConsonants.success,
        videoDetails: updatedVideosData,
      })
    } else if (response.status === 400) {
      this.setState({
        apiStatus: VideoApiStatusConsonants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state
    const {
      channelName,
      profileImageUrl,
      subscriberCount,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
      fromDistance,
    } = videoDetails

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, onSaveVideo, savedVideosList} = value

          const {videoStatus} = this.state

          const isLikeActive = videoStatus === VideoStatusConsonants.like
          const isDisLikeActive = videoStatus === VideoStatusConsonants.dislike

          const onSaveVideoId = () => {
            onSaveVideo(id)
          }

          const checkId = savedVideosList.find(eachItem => eachItem.id === id)

          const savedVide = checkId !== undefined

          return (
            <VideoDetailCard>
              <VideoPlayer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoPlayer>
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <VideoBelowDetailsCard>
                <ViewsAndTimeCard>
                  <ViewsAndTimeItem>{viewCount} views</ViewsAndTimeItem>
                  <ViewsAndTimeItem>{fromDistance} ago</ViewsAndTimeItem>
                </ViewsAndTimeCard>
                <LikeDislikeSaveCard>
                  <ButtonEl onClick={this.onVideoLike} isActive={isLikeActive}>
                    <BiLike
                      size="20"
                      color={isLikeActive ? '#3b82f6' : '#64748b'}
                    />
                    Like
                  </ButtonEl>
                  <ButtonEl
                    onClick={this.onVideoDislike}
                    isActive={isDisLikeActive}
                  >
                    <BiDislike
                      size="20"
                      color={isDisLikeActive ? '#3b82f6' : '#64748b'}
                    />
                    Dislike
                  </ButtonEl>
                  <ButtonEl onClick={onSaveVideoId} isActive={savedVide}>
                    <BiListPlus
                      size="20"
                      color={savedVide ? '#3b82f6' : '#64748b'}
                    />
                    Save
                  </ButtonEl>
                </LikeDislikeSaveCard>
              </VideoBelowDetailsCard>
              <HorizontalLine />
              <ChannelDetailsCard>
                <ChannelImg src={profileImageUrl} />
                <ChannelNameAndSubscribersCard>
                  <ChannelName>{channelName}</ChannelName>
                  <SubscribersCount>
                    {subscriberCount} subscribers
                  </SubscribersCount>
                </ChannelNameAndSubscribersCard>
              </ChannelDetailsCard>
              <Description isDark={isDark}>{description}</Description>
            </VideoDetailCard>
          )
        }}
      </NxtWatchContext.Consumer>
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
            <VideoDetailsPageContainer isDark={isDark}>
              <Header />
              <SubContainer>
                <Sidebar />
                {this.renderFinal()}
              </SubContainer>
            </VideoDetailsPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetailsPage
