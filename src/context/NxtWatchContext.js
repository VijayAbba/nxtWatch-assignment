import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: true,
  activeWindow: '',
  onToggleTheme: () => {},
  onChangeActiveWindow: () => {},
})

export default NxtWatchContext
