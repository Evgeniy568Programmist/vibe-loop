import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import BottomNav from "@/components/BottomNav";
import LanguageSelector from "@/components/LanguageSelector";

// Real TikTok videos
const videos = [
  {
    id: 1,
    videoUrl: "/videos/1.mp4",
    username: "dancer123",
    description: "Learning this new dance trend! 💃 #dance #viral",
    likes: 45600,
    comments: 892,
    shares: 1200,
  },
  {
    id: 2,
    videoUrl: "/videos/2.mp4",
    username: "chefmaster",
    description: "Easy 5-minute pasta recipe 🍝 #cooking #recipe",
    likes: 89300,
    comments: 1523,
    shares: 3400,
  },
  {
    id: 3,
    videoUrl: "/videos/3.mp4",
    username: "cutepets",
    description: "My cat's morning routine 😺 #cats #pets",
    likes: 123400,
    comments: 2341,
    shares: 5600,
  },
  {
    id: 4,
    videoUrl: "/videos/4.mp4",
    username: "travelblogger",
    description: "Hidden gems in Paris 🗼 #travel #paris #wanderlust",
    likes: 234500,
    comments: 3456,
    shares: 7800,
  },
  {
    id: 5,
    videoUrl: "/videos/5.mp4",
    username: "fitnessguru",
    description: "10-minute home workout 💪 #fitness #workout #healthy",
    likes: 156700,
    comments: 2789,
    shares: 4500,
  },
  {
    id: 6,
    videoUrl: "/videos/6.mp4",
    username: "makeupartist",
    description: "Easy summer makeup look ✨ #beauty #makeup #tutorial",
    likes: 198400,
    comments: 3211,
    shares: 6700,
  },
  {
    id: 7,
    videoUrl: "/videos/7.mp4",
    username: "gamer_pro",
    description: "Epic gaming moment! 🎮 #gaming #streamer #victory",
    likes: 167800,
    comments: 2456,
    shares: 3900,
  },
  {
    id: 8,
    videoUrl: "/videos/8.mp4",
    username: "comedyking",
    description: "When your code finally works 😂 #comedy #programming #funny",
    likes: 289600,
    comments: 4567,
    shares: 8900,
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