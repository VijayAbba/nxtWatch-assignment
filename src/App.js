import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoDetailsPage from './components/VideoDetailsPage'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

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
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsPage}
          />

          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
