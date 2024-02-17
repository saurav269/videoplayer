export const API_KEY = 'AIzaSyB3ow9dYNlj2bb4czbzY-i5Nz5Kqlep5A0'


// 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=0&key=[YOUR_API_KEY] HTTP/1.1'

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

export const value_converter=(value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value
    }
}
