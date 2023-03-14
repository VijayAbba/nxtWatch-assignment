import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const GamingContainer = styled.div`
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

export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`

export const GamingPageTopCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const GameIconCard = styled.div`
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

export const GamingPageHeading = styled.h1``

export const GamesListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const GameItem = styled.li`
  margin: 20px;
`

export const GameItemLink = styled(Link)`
  text-decoration: none;
`

export const GameImage = styled.img`
  height: 160px;
  /* Medium */
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
export const GameHeading = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 16px;
  /* Medium */
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const WatchCountCard = styled.div`
  margin: 0px;
  padding: 0px;

  /* Medium */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const WatchingCount = styled.p`
  margin: 0px;
  padding: 0px;
  padding-top: 5px;
  color: #475569;
  font-weight: bold;
  padding-right: 10px;
  font-size: 14px;

  /* Medium */
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
