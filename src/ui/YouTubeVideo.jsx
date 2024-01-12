import { memo } from "react";
import styled from "styled-components"
import YouTube from 'react-youtube';

const StyledYouTube = styled(YouTube)`
  flex: 1;
  `

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    width: "100%",
    height: "100%"
  };
  
  return <StyledYouTube videoId={videoId} opts={opts} />;
}

export default memo(YouTubeVideo);
