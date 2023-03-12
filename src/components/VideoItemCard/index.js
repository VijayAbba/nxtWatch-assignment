import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItem,
  VideoImage,
  VideoContentDetails,
  ChannelImageCard,
  ChannelImage,
  TitleAndAllDetailsCard,
  VideoTitle,
  BottomCard,
  ChannelNameText,
  BottomText,
  StyledLink,
} from './styledComponents'

const VideoItemCard = props => {
  const {videoDetails} = props

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
            <VideoItem>
              <VideoImage src={thumbnailUrl} />
              <VideoContentDetails>
                <ChannelImageCard>
                  <ChannelImage src={profileImageUrl} />
                </ChannelImageCard>
                <TitleAndAllDetailsCard>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <BottomCard>
                    <ChannelNameText>{channelName}</ChannelNameText>
                    <BottomText>{viewCount} views</BottomText>
                    <BottomText>{fromDistance}</BottomText>
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
