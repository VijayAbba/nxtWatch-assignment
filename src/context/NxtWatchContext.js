import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: true,
  activeWindow: '',
  savedVideosList: [],
  onToggleTheme: () => {},
  onChangeActiveWindow: () => {},
  onSaveVideo: () => {},
})

export default NxtWatchContext
