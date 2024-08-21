import { Component } from 'react'
import Header from '../Header'
import SavedVideosBody from '../SavedVideosBody'
import SideBar from '../SideBar'
import './index.css'

class SavedVideos extends Component {
  render() {
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            <SavedVideosBody />
          </div>
        </div>
      </>
    )
  }
}
export default SavedVideos
