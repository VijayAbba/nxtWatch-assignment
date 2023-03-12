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
  state = {isDark: false, activeWindow: 'HOME', savedVideosList: []}

  onToggleTheme = () => {
    this.setState(preState => ({isDark: !preState.isDark}))
  }

  onChangeActiveWindow = id => {
    this.setState({activeWindow: id})
  }

  onSaveVideo = id => {
    const {savedVideosList} = this.state

    const getIndex = savedVideosList.findIndex(eachItem => eachItem.id === id)
    if (getIndex === -1) {
      this.setState(preState => ({
        savedVideosList: [...preState.savedVideosList, {id}],
      }))
    } else {
      const filterList = savedVideosList.filter(eachItem => eachItem.id !== id)
      this.setState({savedVideosList: filterList})
    }
  }

  render() {
    const {isDark, activeWindow, savedVideosList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          activeWindow,
          savedVideosList,
          onToggleTheme: this.onToggleTheme,
          onChangeActiveWindow: this.onChangeActiveWindow,
          onSaveVideo: this.onSaveVideo,
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
