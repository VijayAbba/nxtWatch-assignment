import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NoSearchContainer,
  NoSearchImg,
  NoSearchHeading,
  NoSearchText,
  Retry,
} from './styledComponents'

const NoSearchResults = props => {
  const {retryData} = props

  const onClickRetry = () => {
    retryData()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <NoSearchContainer>
            <NoSearchImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png " />

            <NoSearchHeading isDark={isDark}>
              No Search results found
            </NoSearchHeading>
            <NoSearchText isDark={isDark}>
              Try different key words or remove search filter
            </NoSearchText>
            <Retry onClick={onClickRetry}>Retry</Retry>
          </NoSearchContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default NoSearchResults
