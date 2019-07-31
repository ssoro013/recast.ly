import YOUTUBE_API_KEY from "../config/youtube.js"
import Search from './Search.js'
import VideoPlayer from './VideoPlayer.js'
import VideoList from './VideoList.js'
import exampleVideoData from '../data/exampleVideoData.js'
import searchYouTube from '../lib/searchYouTube.js'

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      exampleVideoData: exampleVideoData,
      video: exampleVideoData[0],
      searchValue:''
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount(){}
  // componentWillUnmount(){}

  onClick(e) {
    //e is an object that contains information about the event you click
    // console.log(e.target.innerHTML)
  // Get element by id grab video information
    // this.state.exampleVideoData.map((video)=> {video.snippet.title})
    const video = this.state.exampleVideoData.filter((video) => {
      return video.snippet.title === e.target.innerHTML;
    })
    this.setState({video: video[0]})
  }

  onChange(e){
    this.setState({searchValue: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    const options = {
      // searchValue: this.state.searchValue
      query:this.state.searchValue,
      max:5,
      key: YOUTUBE_API_KEY
    }
    const callback = (data) => console.log(data);
    searchYouTube(options, callback)
  }

  render(){
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onChange={this.onChange} onSubmit={this.onSubmit}/>
          </div>
        </nav>
      <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.exampleVideoData} onClick={this.onClick}/>
      </div>
    </div>
  </div>
    )  ;
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


