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
  
  const [lastTap, setLastTap] = useState(0);
  const DOUBLE_TAP_DELAY = 300;

  const translations = {
    en: {
      addedToLiked: "Added to liked videos",
      removedFromLiked: "Removed from liked videos"
    },
    ru: {
      addedToLiked: "Добавлено в понравившиеся",
      removedFromLiked: "Удалено из понравившихся"
    },
    uk: {
      addedToLiked: "Додано до вподобаних",
      removedFromLiked: "Видалено з вподобаних"
    },
    es: {
      addedToLiked: "Añadido a videos que me gustan",
      removedFromLiked: "Eliminado de videos que me gustan"
    },
    fr: {
      addedToLiked: "Ajouté aux vidéos aimées",
      removedFromLiked: "Supprimé des vidéos aimées"
    },
    de: {
      addedToLiked: "Zu gefallenen Videos hinzugefügt",
      removedFromLiked: "Aus gefallenen Videos entfernt"
    },
    "pt-BR": {
      addedToLiked: "Adicionado aos vídeos curtidos",
      removedFromLiked: "Removido dos vídeos curtidos"
    },
    "pt-PT": {
      addedToLiked: "Adicionado aos vídeos com gosto",
      removedFromLiked: "Removido dos vídeos com gosto"
    },
    pl: {
      addedToLiked: "Dodano do polubionych",
      removedFromLiked: "Usunięto z polubionych"
    },
    cs: {
      addedToLiked: "Přidáno do oblíbených",
      removedFromLiked: "Odebráno z oblíbených"
    }
  };

  const currentLang = localStorage.getItem("app-language") || "en";
  const t = translations[currentLang as keyof typeof translations];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      console.log(`Video ${isPlaying ? 'paused' : 'playing'}`);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    toast({
      description: isLiked ? t.removedFromLiked : t.addedToLiked,
      duration: 1500,
    });
  };

  const handleVideoPress = (e: React.MouseEvent) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < DOUBLE_TAP_DELAY && tapLength > 0) {
      if (!isLiked) {
        toggleLike();
      }
      e.preventDefault();
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
      
      <div className="absolute bottom-24 left-4 right-16 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
        <Link to={`/profile/${username}`}>
          <h2 className="text-white font-semibold text-lg mb-2 hover:text-tiktok-red transition-colors">
            @{username}
          </h2>
        </Link>
        <p className="text-white text-base">{description}</p>
      </div>

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