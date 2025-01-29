import React from "react";
import { Home, Search, PlusSquare, MessageCircle, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const BottomNav = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (!user) {
      navigate("/signin");
    }
  };

  const translations = {
    en: {
      home: "Home",
      discover: "Discover",
      inbox: "Inbox",
      profile: "Profile"
    },
    ru: {
      home: "Главная",
      discover: "Поиск",
      inbox: "Сообщения",
      profile: "Профиль"
    },
    uk: {
      home: "Головна",
      discover: "Пошук",
      inbox: "Повідомлення",
      profile: "Профіль"
    },
    es: {
      home: "Inicio",
      discover: "Descubrir",
      inbox: "Mensajes",
      profile: "Perfil"
    },
    fr: {
      home: "Accueil",
      discover: "Découvrir",
      inbox: "Messages",
      profile: "Profil"
    },
    de: {
      home: "Start",
      discover: "Entdecken",
      inbox: "Nachrichten",
      profile: "Profil"
    },
    "pt-BR": {
      home: "Início",
      discover: "Descobrir",
      inbox: "Mensagens",
      profile: "Perfil"
    },
    "pt-PT": {
      home: "Início",
      discover: "Descobrir",
      inbox: "Mensagens",
      profile: "Perfil"
    },
    pl: {
      home: "Główna",
      discover: "Odkrywaj",
      inbox: "Wiadomości",
      profile: "Profil"
    },
    cs: {
      home: "Domů",
      discover: "Objevit",
      inbox: "Zprávy",
      profile: "Profil"
    }
  };

  const currentLang = localStorage.getItem("app-language") || "en";
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 py-2 px-4">
      <div className="flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center text-white">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">{t.home}</span>
        </Link>
        
        <button className="flex flex-col items-center text-white">
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">{t.discover}</span>
        </button>
        
        <button className="flex flex-col items-center">
          <div className="bg-tiktok-red p-2 rounded-lg">
            <PlusSquare className="w-6 h-6 text-white" />
          </div>
        </button>
        
        <button className="flex flex-col items-center text-white">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs mt-1">{t.inbox}</span>
        </button>
        
        <button 
          onClick={handleProfileClick}
          className="flex flex-col items-center text-white"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">{t.profile}</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;