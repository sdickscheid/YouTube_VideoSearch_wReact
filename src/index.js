// Get React and ReactDOM from installed modules (npm install) and provide access to them in this file
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import component(s) from it's file reference (relative path) so the component can be referenced below in the App
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const youTubeAPI = 'AIzaSyDbY_yFJGB4T4wNrczZjpzOdlh832m1fV8';

// Create a new component. This component should produce so HTML after it's compiled from JSX
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: youTubeAPI, term: 'javascript'}, (apiResults) => {
        this.setState({
          videos: apiResults,
          selectedVideo: apiResults[0]
        });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        {/* videoList needs access to the current videos (data) in state on its parent App component. You pass the video data down from App to its child component, VideoList, using {this.state.videos}. This is called "passing props" */}
        <VideoList
          // v__ passing props "videos" to VideoList component
                  // v__ assign props the current value of the piece of state called "videos"
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }

        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
