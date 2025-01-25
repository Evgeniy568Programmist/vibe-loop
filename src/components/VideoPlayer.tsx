import React, { useRef, useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  username: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}

const VideoPlayer = ({
  videoUrl,
  username,
  description,
  likes,
  comments,
  shares,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative h-screen w-full bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={videoUrl}
        loop
        onClick={togglePlay}
      />
      
      {/* Video Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h2 className="text-white font-semibold">@{username}</h2>
        <p className="text-white text-sm mt-1">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-4">
        <button
          onClick={toggleLike}
          className="p-2 rounded-full bg-transparent text-white hover:bg-white/10 transition-colors"
        >
          <Heart
            className={`w-8 h-8 ${isLiked ? "fill-tiktok-red text-tiktok-red" : ""}`}
          />
          <span className="text-sm">{likes}</span>
        </button>
        
        <button className="p-2 rounded-full bg-transparent text-white hover:bg-white/10 transition-colors">
          <MessageCircle className="w-8 h-8" />
          <span className="text-sm">{comments}</span>
        </button>
        
        <button className="p-2 rounded-full bg-transparent text-white hover:bg-white/10 transition-colors">
          <Share2 className="w-8 h-8" />
          <span className="text-sm">{shares}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;