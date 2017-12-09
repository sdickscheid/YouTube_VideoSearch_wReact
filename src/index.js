// Get React and ReactDOM from installed modules (npm install) and provide access to them in this file
import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import component(s) from it's file reference (relative path) so the component can be referenced in the App (index component)
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
    };

    this.videoSearch('javascript');
  }

  videoSearch(term) {
    YTSearch({key: youTubeAPI, term: term}, (apiResults) => {
        this.setState({
          // created a variable "videos" and assigned it the array of videos returned from the api call based on the search term
          videos: apiResults,
          // set selectedVideo to the first video returned in the array of videos
          selectedVideo: apiResults[0]
        });
    });
  }

      /* The VideoDetail component is set to the value of the "selectedVideo" piece of State, which is quickly set to the 1st video of the videos array returned by apiResults */
      /* videoList needs access to the current videos (data) in state on its parent App component. You pass the video data down from App to its child component, VideoList, using {this.state.videos}. This is called "passing props" */
      /* passing props "videos" to VideoList component
      assign props the current value of the piece of state called "videos" */

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
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
