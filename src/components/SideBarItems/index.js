import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiGamepad} from 'react-icons/gi'
import {BiListPlus} from 'react-icons/bi'

import {LiItem, LinkText, NavbarLink} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const getIcon = (id, color) => {
  switch (id) {
    case 'HOME':
      return <AiFillHome size="30" color={color} />
    case 'TRENDING':
      return <HiFire size="30" color={color} />
    case 'GAMING':
      return <GiGamepad size="30" color={color} />
    case 'SAVEDVIDEOS':
      return <BiListPlus size="30" color={color} />
    default:
      return null
  }
}

const ListItem = props => {
  const {itemDetails, activeWindow} = props
  const {id, displayText, link} = itemDetails
  const iconColor = activeWindow === id ? 'red' : 'gray'

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {onChangeActiveWindow, isDark} = value

        const onClickLink = () => {
          onChangeActiveWindow(id)
        }

        return (
          <LiItem isDark={isDark} activeWidow={activeWindow === id}>
            <NavbarLink to={link} onClick={onClickLink}>
              {getIcon(id, iconColor)}
              <LinkText isDark={isDark} bold={activeWindow === id}>
                {displayText}
              </LinkText>
            </NavbarLink>
          </LiItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default ListItem
