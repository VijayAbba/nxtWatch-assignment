import {IoCloseOutline} from 'react-icons/io5'
import {
  BannerContainer,
  CloseButtonCard,
  BannerDetailsCard,
  BannerImg,
  BannerText,
  BannerButton,
} from './styledComponents'

const Banner = props => {
  const {onHideBanner} = props

  const onCloseBanner = () => {
    onHideBanner()
  }
  return (
    <BannerContainer>
      <CloseButtonCard onClick={onCloseBanner}>
        <IoCloseOutline size="25" />
      </CloseButtonCard>
      <BannerDetailsCard>
        <BannerImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt=""
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerDetailsCard>
    </BannerContainer>
  )
}

export default Banner
