import React, { Component } from "react"
import SearchBar from './SearchBar';
import youtube from "../Api/youtube";
import VideoList from "./VideosList"
import VideoDetails from './VideoDetail';



class App2 extends Component {

    componentDidMount(){
        this.onTermSubmit("")
    }

    state = {videos : [] , selectedVideo : null}

    onTermSubmit = async (term) => {
        
        const API_KEY = 'AIzaSyClwnGoBhgHKAQ3KVNL5Tn3gosyyYHB6-c'
        
        const respons = await youtube.get("/search" , {
            params : {
                part: "snippet",
                maxResults: 20,
                key: API_KEY,
                q : term
            }
        })

        this.setState({
            videos : respons.data.items , 
            selectedVideo : respons.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo : video
        })
    }

    render () {
        return (
            <div className = "ui container">
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                        <VideoDetails video = {this.state.selectedVideo}/>
                
                        </div>
                        <div className = "five wide column">
                        <VideoList 
                                onVideoSelect = {this.onVideoSelect} 
                                videos = {this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App2