import styled from 'styled-components'

export const VideoDetailsPageContainer = styled.div`
  padding-top: 100px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
`

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const VideoDetailCard = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  /* Medium */
  @media screen and (min-width: 768px) {
  }
`

export const VideoPlayer = styled.div`
  height: 200px;

  /* Medium */
  @media screen and (min-width: 768px) {
    height: 420px;
    padding: 10px;
  }
  /* Large */
  @media screen and (min-width: 992px) {
    height: 720px;
    padding: 10px;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#000000')};
`

export const VideoBelowDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  //   align-items: center;

  /* Medium */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewsAndTimeCard = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`

export const ViewsAndTimeItem = styled.li`
  padding-right: 10px;
  color: #64748b;
`

export const LikeDislikeSaveCard = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  /* Extra Small */
  @media screen and (max-width: 575px) {
    padding-top: 10px;
  }

  /* Medium */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }
`

export const ButtonEl = styled.button`
  background-color: transparent;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  font-weight: bold;
  font-size: 14px;
  width: 90px;
  border-width: 0px;
  color: ${props => (props.isActive ? '#3b82f6' : '#64748b')};
`

export const HorizontalLine = styled.hr`
  color: #94a3b8;
  border-width: 0.1px;
  opacity: 0.4;
`

export const ChannelDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ChannelImg = styled.img`
  width: 70px;
  margin-right: 30px;
`

export const ChannelNameAndSubscribersCard = styled.div``

export const ChannelName = styled.p``

export const SubscribersCount = styled.p`
  color: #64748b;
`

export const Description = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#000000')};

  /* Medium */
  @media screen and (min-width: 768px) {
    padding-left: 100px;
  }
`
