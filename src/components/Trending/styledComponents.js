import styled from 'styled-components'

export const TrendingContainer = styled.div`
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

export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`

export const TrendingPageTopCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #f1f1f1;
`
export const FireCard = styled.div`
  background-color: #e2e8f0;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-left: 15px;
  margin-right: 15px;
`

export const TrendingPageHeading = styled.h1``

export const VideoListCard = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 30px;
`
