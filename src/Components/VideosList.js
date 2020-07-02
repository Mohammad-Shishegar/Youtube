import React, { Component } from "react"
import VideoItem from "./VideoItem"


class VideoList extends Component {

    render() {
        const onVideoSelect = this.props.onVideoSelect
        const renderedList =  this.props.videos.map(video => {
            return <VideoItem key={video.id.videoId} video = {video} onVideoSelect = {onVideoSelect}/>
        })
        return ( 
        <div className = "ui relaxed divide list"> {renderedList} </div>
        )
    }
}

export default VideoList