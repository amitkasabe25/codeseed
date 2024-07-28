import React from 'react';
interface VideoAttributes {
    videoTitle : string,
    videoLength : number
}
const Video:React.FC<VideoAttributes> = ({videoLength , videoTitle}) => {
    return (
       <>
       <h1>MI</h1>
       </>
    )
}

export default Video;