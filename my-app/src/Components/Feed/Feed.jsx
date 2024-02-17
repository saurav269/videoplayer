import React, { useEffect, useState } from 'react'
import './Feed.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'

const Feed = ({category}) => {

    const [data, setData] = useState([]);

    const fetchData=async()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then((res) => res.json()).then(data => setData(data.items))
        console.log(data.items)
    }
    useEffect(() => {
        fetchData();
    },[category])
  return (
    <div className="feed">
        {data.map((ele,index) => (
                    <Link to={`video/${ele.snippet.categoryId}/${ele.id}`} className='card'>
                    <img src={ele.snippet.thumbnails.medium.url} alt='' />
                    <h2>{ele.snippet.title} </h2>
                    <h3>{ele.snippet.channelTitle}</h3>
                    <p>{value_converter(ele.statistics.viewCount)} &bull; {moment(ele.snippet.publishedAt).fromNow()}</p>
                </Link>
                ))}
    </div>
  )
}

export default Feed
