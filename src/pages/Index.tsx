import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import BottomNav from "@/components/BottomNav";
import LanguageSelector from "@/components/LanguageSelector";

// Real TikTok videos
const videos = [
  {
    id: 1,
    videoUrl: "/videos/dance-video.mp4",
    username: "dancer123",
    description: "Learning this new dance trend! 💃 #dance #viral",
    likes: 45600,
    comments: 892,
    shares: 1200,
  },
  {
    id: 2,
    videoUrl: "/videos/cooking-video.mp4",
    username: "chefmaster",
    description: "Easy 5-minute pasta recipe 🍝 #cooking #recipe",
    likes: 89300,
    comments: 1523,
    shares: 3400,
  },
  {
    id: 3,
    videoUrl: "/videos/pet-video.mp4",
    username: "cutepets",
    description: "My cat's morning routine 😺 #cats #pets",
    likes: 123400,
    comments: 2341,
    shares: 5600,
  }
];

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <LanguageSelector />
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