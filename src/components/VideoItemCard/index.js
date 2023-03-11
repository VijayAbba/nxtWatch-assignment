import {VideoItem, VideoImage} from './styledComponents'

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
  } = videoDetails

  return (
    <VideoItem className="">
      <VideoImage src={thumbnailUrl} />
      <h1 className="">HelloWorld</h1>
    </VideoItem>
  )
}

export default VideoItemCard
