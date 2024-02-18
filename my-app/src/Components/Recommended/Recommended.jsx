import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async()=>{
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then((res) => res.json()).then(data => setApiData(data.items))

    }
    useEffect(() => {
        fetchData();
    },[])
  return (
    <div className='recommended'>
        {apiData ? apiData.map((ele,i) => (
                    <Link to={`/video/${ele.snippet.categoryId}/${ele.id}`} key={i} className="side-video-list">
                    <img src={ele.snippet.thumbnails.medium.url} alt='' />
                    <div className="vid-info">
                        <h4>{ele.snippet.title}</h4>
                        <p>{ele.snippet.channelTitle}</p>
                        <p>{value_converter(ele.statistics.viewCount)}</p>
                    </div>
                </Link>

        )) : ""}

      
    </div>
  )
}

export default Recommended
