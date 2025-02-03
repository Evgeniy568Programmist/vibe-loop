import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "id", name: "Bahasa Indonesia" },
  { code: "kk", name: "Қазақша" },
  { code: "hy", name: "Հայերեն" },
  { code: "az", name: "Azərbaycan dili" },
  { code: "tr", name: "Türkçe" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "nl", name: "Nederlands" },
  { code: "zh-CN", name: "简体中文" },
  { code: "zh-TW", name: "繁體中文" },
  { code: "ja", name: "日本語" },
  { code: "ru", name: "Русский" },
  { code: "uk", name: "Українська" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "pt-BR", name: "Português (BR)" },
  { code: "pt-PT", name: "Português (PT)" },
  { code: "pl", name: "Polski" },
  { code: "cs", name: "Čeština" },
];

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("app-language");
    if (storedLang) {
      setCurrentLang(storedLang);
      console.log("Initialized language from storage:", storedLang);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    console.log(`Changing language to: ${langCode}`);
    localStorage.setItem("app-language", langCode);
    setCurrentLang(langCode);
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed top-4 right-4 z-50 bg-secondary/80 p-1.5 rounded-full hover:bg-secondary/90 transition-colors">
        <Globe className="w-5 h-5 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-44 bg-secondary/95 border-secondary max-h-[70vh] overflow-y-auto" 
        align="end"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`text-sm text-white hover:bg-white/10 cursor-pointer py-1 ${
              currentLang === lang.code ? "bg-white/20" : ""
            }`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;