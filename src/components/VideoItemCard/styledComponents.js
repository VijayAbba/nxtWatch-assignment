import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  list-style-type: none;
  padding: 10px;

  /* Medium */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: ${props => (props.trending ? 'row' : 'column')};
    justify-content: ${props => (props.trending ? 'flex-start' : 'center')};
    align-items: ${props => (props.trending ? 'flex-start' : 'center')};

    width: ${props => (props.trending ? '80vw' : '100%')};
  }
`

export const VideoImage = styled.img`
  width: 320px;
  height: 190px;
`

export const VideoContentDetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;

  /* Medium */
  @media screen and (min-width: 768px) {
    width: ${props => (props.trending ? '100%;' : '320px')};
  }
`

export const ChannelImage = styled.img`
  height: 45px;
  /* Medium */
  @media screen and (min-width: 768px) {
    display: ${props => (props.trending ? 'none' : 'visible')};
  }
`
export const TitleAndAllDetailsCard = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  /* Medium */
  @media screen and (min-width: 768px) {
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const BottomCard = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* Medium */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 250px;
  }
`

export const ChannelNameText = styled.li`
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  list-style-type: none;
  color: #64748b;

  @media screen and (min-width: 768px) {
    width: 250px;
    margin-bottom: 10px;
  }
`

export const BottomText = styled.li`
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  list-style-type: none;
  color: #64748b;
  @media screen and (min-width: 768px) {
    padding-right: 20px;
  }
`

// export const NavbarLink = styled(Link)`
//   font-weight: {
//     ${props => (props.active ? 'bold' : 'normal')}
//   }
//   color: #000000;
//   text-decoration: none;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
//   padding-left: 20px;
// `
