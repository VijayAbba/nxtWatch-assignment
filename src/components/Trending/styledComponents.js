import styled from 'styled-components'

import {Link} from 'react-router-dom'

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
  justify-content: center;
  align-items: center;
`

export const StyledLink = styled(Link)``
