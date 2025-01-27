import React, { useRef, useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  
  // Track double tap
  const [lastTap, setLastTap] = useState(0);
  const DOUBLE_TAP_DELAY = 300; // milliseconds

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
    toast({
      description: isLiked ? "Removed from liked videos" : "Added to liked videos",
      duration: 1500,
    });
  };

  const handleVideoPress = (e: React.MouseEvent) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < DOUBLE_TAP_DELAY && tapLength > 0) {
      // Double tap detected
      if (!isLiked) {
        toggleLike();
      }
      e.preventDefault(); // Prevent single tap action
    } else {
      togglePlay();
    }
    
    setLastTap(currentTime);
  };

  return (
    <div className="relative h-screen w-full bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={videoUrl}
        loop
        onClick={handleVideoPress}
      />
      
      {/* Video Info */}
      <div className="absolute bottom-24 left-4 right-16 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
        <Link to={`/profile/${username}`}>
          <h2 className="text-white font-semibold text-lg mb-2 hover:text-tiktok-red transition-colors">
            @{username}
          </h2>
        </Link>
        <p className="text-white text-base">{description}</p>
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