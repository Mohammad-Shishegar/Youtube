import React , {Component} from "react"
import  "./VideoDetails.css"

class VideoDetails extends Component{
    render(){
        const video = this.props.video
        if(!video){
            return(
                <div>
                    Loading....
                </div>
            )
        }
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return(
            <div>
                <div className = "ui embed"> 
                    <iframe title = {"video player"} src = {videoSrc} allowFullScreen />
                </div>
                <div className = "ui segment">
                    <h4 className = "ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
    }
}
export default VideoDetails