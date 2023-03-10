import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LiItem = styled.li`
  background-color: ${props =>
    props.activeWidow && !props.isDark ? '#f1f5f9' : ''};
  background-color: ${props =>
    props.activeWidow && props.isDark ? '#383838' : ''};
`

export const LinkText = styled.p`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-left: 20px;
`

export const NavbarLink = styled(Link)`
  font-weight: {
    ${props => (props.active ? 'bold' : 'normal')}
  }
  color: #000000;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`
