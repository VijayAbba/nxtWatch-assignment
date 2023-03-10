import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import NxtWatchContext from './context/NxtWatchContext'

// Replace your code here

class App extends Component {
  state = {isDark: false, activeWindow: 'HOME'}

  onToggleTheme = () => {
    this.setState(preState => ({isDark: !preState.isDark}))
  }

  onChangeActiveWindow = id => {
    this.setState({activeWindow: id})
  }

  render() {
    const {isDark, activeWindow} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          activeWindow,
          onToggleTheme: this.onToggleTheme,
          onChangeActiveWindow: this.onChangeActiveWindow,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
