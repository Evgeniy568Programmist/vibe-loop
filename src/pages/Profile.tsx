import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

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
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const translations = {
    en: {
      followers: "Followers",
      following: "Following",
      subscribe: "Subscribe",
      unsubscribe: "Unsubscribe",
      subscribed: "Subscribed!",
      unsubscribed: "Unsubscribed",
      subscribedDesc: "You are now subscribed to {username}'s content",
      unsubscribedDesc: "You have unsubscribed from {username}'s content"
    },
    ru: {
      followers: "Подписчики",
      following: "Подписки",
      subscribe: "Подписаться",
      unsubscribe: "Отписаться",
      subscribed: "Подписка оформлена!",
      unsubscribed: "Подписка отменена",
      subscribedDesc: "Вы подписались на контент пользователя {username}",
      unsubscribedDesc: "Вы отписались от контента пользователя {username}"
    },
    uk: {
      followers: "Підписники",
      following: "Підписки",
      subscribe: "Підписатися",
      unsubscribe: "Відписатися",
      subscribed: "Підписка оформлена!",
      unsubscribed: "Підписка скасована",
      subscribedDesc: "Ви підписалися на контент користувача {username}",
      unsubscribedDesc: "Ви відписалися від контенту користувача {username}"
    },
    es: {
      followers: "Seguidores",
      following: "Siguiendo",
      subscribe: "Suscribirse",
      unsubscribe: "Desuscribirse",
      subscribed: "¡Suscrito!",
      unsubscribed: "Desuscrito",
      subscribedDesc: "Ahora estás suscrito al contenido de {username}",
      unsubscribedDesc: "Te has desuscrito del contenido de {username}"
    },
    fr: {
      followers: "Abonnés",
      following: "Abonnements",
      subscribe: "S'abonner",
      unsubscribe: "Se désabonner",
      subscribed: "Abonné !",
      unsubscribed: "Désabonné",
      subscribedDesc: "Vous êtes maintenant abonné au contenu de {username}",
      unsubscribedDesc: "Vous vous êtes désabonné du contenu de {username}"
    },
    de: {
      followers: "Follower",
      following: "Folgt",
      subscribe: "Abonnieren",
      unsubscribe: "Abbestellen",
      subscribed: "Abonniert!",
      unsubscribed: "Abbestellt",
      subscribedDesc: "Sie haben {username}s Inhalt abonniert",
      unsubscribedDesc: "Sie haben {username}s Inhalt abbestellt"
    },
    "pt-BR": {
      followers: "Seguidores",
      following: "Seguindo",
      subscribe: "Inscrever-se",
      unsubscribe: "Cancelar inscrição",
      subscribed: "Inscrito!",
      unsubscribed: "Inscrição cancelada",
      subscribedDesc: "Você agora está inscrito no conteúdo de {username}",
      unsubscribedDesc: "Você cancelou sua inscrição no conteúdo de {username}"
    },
    "pt-PT": {
      followers: "Seguidores",
      following: "A seguir",
      subscribe: "Subscrever",
      unsubscribe: "Cancelar subscrição",
      subscribed: "Subscrito!",
      unsubscribed: "Subscrição cancelada",
      subscribedDesc: "Agora está subscrito ao conteúdo de {username}",
      unsubscribedDesc: "Cancelou a subscrição do conteúdo de {username}"
    },
    pl: {
      followers: "Obserwujący",
      following: "Obserwowane",
      subscribe: "Obserwuj",
      unsubscribe: "Przestań obserwować",
      subscribed: "Zaobserwowano!",
      unsubscribed: "Przestano obserwować",
      subscribedDesc: "Obserwujesz teraz treści użytkownika {username}",
      unsubscribedDesc: "Przestaliście obserwować treści użytkownika {username}"
    },
    cs: {
      followers: "Sledující",
      following: "Sleduje",
      subscribe: "Sledovat",
      unsubscribe: "Přestat sledovat",
      subscribed: "Sledováno!",
      unsubscribed: "Sledování zrušeno",
      subscribedDesc: "Nyní sledujete obsah uživatele {username}",
      unsubscribedDesc: "Přestali jste sledovat obsah uživatele {username}"
    },
    "zh-CN": {
      followers: "粉丝",
      following: "关注",
      subscribe: "关注",
      unsubscribe: "取消关注",
      subscribed: "已关注！",
      unsubscribed: "已取消关注",
      subscribedDesc: "你已关注 {username} 的内容",
      unsubscribedDesc: "你已取消关注 {username} 的内容"
    },
    "zh-TW": {
      followers: "粉絲",
      following: "追蹤中",
      subscribe: "追蹤",
      unsubscribe: "取消追蹤",
      subscribed: "已追蹤！",
      unsubscribed: "已取消追蹤",
      subscribedDesc: "你已追蹤 {username} 的內容",
      unsubscribedDesc: "你已取消追蹤 {username} 的內容"
    },
    ja: {
      followers: "フォロワー",
      following: "フォロー中",
      subscribe: "フォロー",
      unsubscribe: "フォロー解除",
      subscribed: "フォローしました！",
      unsubscribed: "フォロー解除しました",
      subscribedDesc: "{username} をフォローしました",
      unsubscribedDesc: "{username} のフォローを解除しました"
    }
  };

  const currentLang = localStorage.getItem("app-language") || "en";
  const t = translations[currentLang as keyof typeof translations];

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    toast({
      title: isSubscribed ? t.unsubscribed : t.subscribed,
      description: isSubscribed 
        ? t.unsubscribedDesc.replace("{username}", username || "")
        : t.subscribedDesc.replace("{username}", username || ""),
    });
  };

  const handleClose = () => {
    navigate(-1);
  };

  console.log("Viewing profile of:", username);

  return (
    <div className="bg-black min-h-screen pb-16 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50 text-white hover:bg-gray-800"
        onClick={handleClose}
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="bg-gray-900 p-4 text-white">
        <h1 className="text-2xl font-bold mb-2">@{username}</h1>
        <div className="flex gap-4 mb-4">
          <div>
            <div className="font-bold">{mockUserData.followers}</div>
            <div className="text-sm text-gray-400">{t.followers}</div>
          </div>
          <div>
            <div className="font-bold">{mockUserData.following}</div>
            <div className="text-sm text-gray-400">{t.following}</div>
          </div>
        </div>
        <p className="mb-4">{mockUserData.bio}</p>
        <Button
          variant={isSubscribed ? "outline" : "default"}
          className={isSubscribed ? "bg-transparent text-white border-white" : ""}
          onClick={handleSubscribe}
        >
          {isSubscribed ? t.unsubscribe : t.subscribe}
        </Button>
      </div>

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
