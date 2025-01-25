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

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 py-2 px-4">
      <div className="flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center text-white">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <button className="flex flex-col items-center text-white">
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">Discover</span>
        </button>
        
        <button className="flex flex-col items-center">
          <div className="bg-tiktok-red p-2 rounded-lg">
            <PlusSquare className="w-6 h-6 text-white" />
          </div>
        </button>
        
        <button className="flex flex-col items-center text-white">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs mt-1">Inbox</span>
        </button>
        
        <button 
          onClick={handleProfileClick}
          className="flex flex-col items-center text-white"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;