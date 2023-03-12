import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NoSearchContainer,
  NoSearchImg,
  NoSearchHeading,
  NoSearchText,
  Retry,
} from './styledComponents'

const FailureCard = props => {
  const {retryData} = props

  const onClickRetry = () => {
    retryData()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        const imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <NoSearchContainer>
            <NoSearchImg src={imgUrl} />

            <NoSearchHeading isDark={isDark}>
              Oops! Something Went Wrong
            </NoSearchHeading>
            <NoSearchText isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </NoSearchText>
            <Retry onClick={onClickRetry}>Retry</Retry>
          </NoSearchContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureCard
