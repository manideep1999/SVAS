import React, { useRef, useEffect } from "react";
import "./AutoPlayVideo.css";

function AutoPlayVideo({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          videoRef.current.playbackRate = 1.2;
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 } // Adjust this value for sensitivity to viewport intersection
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      className="responsive-video"
      muted
      playsInline
      controls={false}
    />
  );
}

export default AutoPlayVideo;
