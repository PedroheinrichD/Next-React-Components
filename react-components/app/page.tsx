"use client"
import { useState } from "react";
import { VideoPlayer } from "./components/video/videoPlayer";

const Page = () => {

    const [playing, setPlaying] = useState(false)

  return (
    <section className="p-6 mx-auto text-center space-y-4">
      <p>{playing ? `RODANDO` : `PAUSADO`}</p>
      <button className="p-2 mb-2 bg-sky-400 text-white rounded " 
        onClick={() => {
          setPlaying(!playing) // inverte o valor de playing toda vez que clica 
        }}
      >
        Play/Pause
      </button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </section>
  );
};

export default Page;
