import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAHeNCI8Lcn-dJ5ywvOmiHq_sCqBqNgzTI';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }



    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

ReactDOM.render(<App />, document.querySelector('.container'));









// npm start
// npm install --save youtube-api-search