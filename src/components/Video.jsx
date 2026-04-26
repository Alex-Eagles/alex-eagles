import { useState } from "react";
import "./Video.css";

export default function Video() {
  const [play, setPlay] = useState(false);

  return (
    <section className="video">
      <h2>Watch Us Fly</h2>

      <div className="video-container">
        {play ? (
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/1tnc0Vx3sXU?autoplay=1"
            title="Drone Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img src="/drone-video.jpg" alt="preview" />
            <div className="play-button" onClick={() => setPlay(true)}>
              ▶
            </div>
          </>
        )}
      </div>
    </section>
  );
}