import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItem,
  VideoImage,
  VideoContentDetails,
  ChannelImage,
  TitleAndAllDetailsCard,
  VideoTitle,
  BottomCard,
  ChannelNameText,
  BottomText,
  StyledLink,
} from './styledComponents'

const VideoItemCard = props => {
  const {videoDetails, trending} = props

  const {
    channelName,
    profileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    fromDistance,
  } = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <StyledLink to={`/videos/${id}`}>
            <VideoItem trending={trending}>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContentDetails trending={trending}>
                <ChannelImage trending={trending} src={profileImageUrl} />

                <TitleAndAllDetailsCard>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <BottomCard>
                    <ChannelNameText>{channelName}</ChannelNameText>
                    <BottomText>{viewCount} views</BottomText>
                    <BottomText>{publishedAt}</BottomText>
                  </BottomCard>
                </TitleAndAllDetailsCard>
              </VideoContentDetails>
            </VideoItem>
          </StyledLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItemCard
