import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Temporary mock data - in a real app this would come from an API
const mockUserData = {
  username: "creative_user",
  followers: 1234,
  following: 567,
  bio: "Creating awesome content! 🎥",
  videos: [
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
      username: "creative_user",
      description: "Beautiful spring day 🌸 #nature #spring",
      likes: 2345,
      comments: 234,
      shares: 56,
    },
  ],
};

const Profile = () => {
  const { username } = useParams();
  const { toast } = useToast();
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    toast({
      title: isSubscribed ? "Unsubscribed" : "Subscribed!",
      description: isSubscribed 
        ? `You have unsubscribed from ${username}'s content`
        : `You are now subscribed to ${username}'s content`,
    });
  };

  console.log("Viewing profile of:", username);

  return (
    <div className="bg-black min-h-screen pb-16">
      {/* Profile Header */}
      <div className="bg-gray-900 p-4 text-white">
        <h1 className="text-2xl font-bold mb-2">@{username}</h1>
        <div className="flex gap-4 mb-4">
          <div>
            <div className="font-bold">{mockUserData.followers}</div>
            <div className="text-sm text-gray-400">Followers</div>
          </div>
          <div>
            <div className="font-bold">{mockUserData.following}</div>
            <div className="text-sm text-gray-400">Following</div>
          </div>
        </div>
        <p className="mb-4">{mockUserData.bio}</p>
        <Button
          variant={isSubscribed ? "outline" : "default"}
          className={isSubscribed ? "bg-transparent text-white border-white" : ""}
          onClick={handleSubscribe}
        >
          {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </Button>
      </div>

      {/* Videos Grid */}
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {mockUserData.videos.map((video) => (
          <div key={video.id} className="snap-start h-screen">
            <VideoPlayer {...video} />
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;