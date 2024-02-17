import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import moment from 'moment'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from './../../data';

const PlayVideo = ({videoId}) => {
  const[apiData, setApiData] = useState(null);
  const[channelData, setChannelData] = useState(null);
  const[commentData, setCommentData] = useState([]);


  const fetchVideoData=async()=>{
    //Fetching Videos Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then((res) => res.json()).then(data => setApiData(data.items[0]))
  }

  const fetchOtherData= async()=>{
    //Fetching Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then((res) => res.json()).then(data => setChannelData(data.items[0]));
    

    //FETCHING COMMENT DATA
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url).then((res) => res.json()).then(data => setCommentData(data.items))
  }


  useEffect(()=>{
    fetchVideoData();
  },[])

  useEffect(() =>{
    fetchOtherData()
  },[apiData])
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted /> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"}  views &bull; {moment(apiData ? apiData.snippet.publishedAt : "2days").fromNow()}</p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Title"}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0,250) : "Description Here"}</p>
        <hr />
        
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102} Comments</h4>
        {commentData ? commentData.map((ele,index) => (
                  <div key={index} className="comment">
                  <img src={ele.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                  <div>
                    <h3>
                      Jack Nicon<span> 1 day ago</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                      magnam.
                    </p>
                    <div className="comment-action">
                        <img src={like} alt='' />
                        <span>244</span>
                        <img src={dislike} alt='' />
                    </div>
                  </div>
                </div>
        )) : ""}
      </div>
    </div>
  );
}

export default PlayVideo
