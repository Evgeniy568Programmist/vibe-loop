import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import BottomNav from "@/components/BottomNav";

// Temporary mock data
const videos = [
  {
    id: 1,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    username: "creative_user",
    description: "Check out this cool effect! 🎥 #creative #effects",
    likes: 1234,
    comments: 123,
    shares: 45,
  },
  {
    id: 2,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    username: "nature_lover",
    description: "Beautiful spring day 🌸 #nature #spring",
    likes: 2345,
    comments: 234,
    shares: 56,
  },
];

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Video Feed */}
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {videos.map((video) => (
          <div key={video.id} className="snap-start h-screen">
            <VideoPlayer {...video} />
          </div>
        ))}
      </div>
      
      {/* Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;