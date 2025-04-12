import Page from "../UI/Page";
import Table from "../UI/Table";
import video from "../assets/Sequence 01_1.mp4";
import audio1 from "../assets/first.mp3"; // Replace with your first audio file
import audio2 from "../assets/second.mp3"; // Replace with your second audio file
import { useRef, useEffect, useState } from "react";
import DividingHeader from "../UI/DividingHeader"

const Home = () => {
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false); // State to trigger transition

  useEffect(() => {
    const videoElement = videoRef.current;

    // Ensure video doesn't loop
    videoElement.loop = false;

    // Handle video stopping at last frame
    const handleEnded = () => {
      videoElement.pause();
      videoElement.currentTime = videoElement.duration; // Stay on last frame
    };

    // Schedule playback sequence after 2 seconds
    const startSequence = setTimeout(() => {
      // Play first audio
      const sound1 = new Audio(audio1);
      sound1.play().catch((error) => {
        console.warn("Failed to play first audio:", error);
      });

      // Play video
      videoElement.play().catch((error) => {
        console.warn("Failed to play video:", error);
      });
    }, 2000);

    // Schedule second audio after 2 seconds + 23ms
    const startSecondAudio = setTimeout(() => {
      const sound2 = new Audio(audio2);
      sound2.play().catch((error) => {
        console.warn("Failed to play second audio:", error);
      });
      setIsActive(true);
    }, 2023);

    videoElement.addEventListener("ended", handleEnded);

    // Cleanup on unmount
    return () => {
      videoElement.removeEventListener("ended", handleEnded);
      clearTimeout(startSequence);
      clearTimeout(startSecondAudio);
    };
  }, []);

  return (
    <div className="mt-[64px] md:mt-[74px]">
      <div className="h-screen w-full overflow-hidden flex justify-center items-center relative ">
        <video
          ref={videoRef}
          className="  lg:w-full lg:h-auto h-full  absolute object-cover"
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute  bg-gradient-to-t from-black to-transparent z-10 h-full w-full bottom-0"></div>
        <div className={`flex absolute home-transition justify-center items-center flex-col z-[12] w-full ${
            isActive ? "active" : "initial"
          }`}>
            <h2 className="text-4xl sm:text-5xl text-white font-semibold leading-none text-center">Welcome to</h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-blue font-bold leading-none text-center">Major Pool League</h1>

        </div>
      </div>
      <div className="mt-5 max-w-7xl mx-auto px-4 py-4 flex justify-center items-center flex-col">
            <DividingHeader header={"3-on-3 Pool League"}/>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue text-center">Win Cash & Have Fun</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2 sm:gap-3 md:gap-4 p-2 sm:p-4 my-4 text-sm sm:text-lg font-semibold text-blue text-center leading-tight  ">
                <div className="flex justify-center items-center h-auto min-h-14 sm:min-h-28 sm:p-2 border border-blue">
                    <h4>3 Person Teams - no limit on subs!</h4>
                </div>
                <div className="flex justify-center items-center min-h-14 sm:min-h-28 p-2 border border-blue">
                    <h4>3-on-3 Round Robin format</h4>
                </div>
                <div className="flex justify-center items-center min-h-14 sm:min-h-28 p-2 border border-blue">
                    <h4>15 week session (14 regular matches & the tournament!)</h4>
                </div>
                <div className="flex justify-center items-center min-h-14 sm:min-h-28 p-2 border border-blue">
                    <h4>Call Your Ball & Pocket is our style of play</h4>
                </div>
                <div className="flex justify-center items-center min-h-14 sm:min-h-28 p-2 border border-blue">
                    <h4>Matches last about 2 hours - You're done by 10:00 each night!</h4>
                </div>
                <div className="flex justify-center items-center min-h-14 sm:min-h-28 p-2 border border-blue">
                    <h4>Every team wins cash! Up to $1,000 for 1st in division!</h4>
                </div>
                <div className="flex justify-center items-center min-h-14 sm:min-h-28 p-2 border border-blue">
                    <h4>You can win over $17,000 per year! How? See below!</h4>
                </div>
                <div className="flex justify-center items-center min-h-14 sm:min-h-28 p-2 border border-blue">
                    <h4>	Traveling & In-House Divisions throughout Arizona!</h4>
                </div>
                <div className="flex justify-center items-center sm:min-h-28 p-2  min-h-14 border border-blue">
                    <h4>Handicapped Divisions!</h4>
                </div>
                <div className=" md:col-span-3 flex justify-center items-center p-2 min-h-14 sm:min-h-28 border border-blue">
                    <h4>Always accepting new players!</h4>
                </div>
                <div className="flex sm:col-span-2 md:col-span-3 justify-center p-2 items-center min-h-14 sm:min-h-28 border border-blue">
                    <h4>The most fun pool league in Arizona!</h4>
                </div>
                

            </div>
      </div>
    </div>
  );
};

export default Home;