import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English (Original)" },
  { code: "ru", name: "Русский" },
  { code: "uk", name: "Українська" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "pt-BR", name: "Português (Brasil)" },
  { code: "pt-PT", name: "Português (Portugal)" },
  { code: "pl", name: "Polski" },
  { code: "cs", name: "Čeština" },
];

const LanguageSelector = () => {
  const handleLanguageChange = (langCode: string) => {
    console.log(`Language changed to: ${langCode}`);
    // Here you would implement the actual language change logic
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed top-4 right-4 z-50 bg-secondary/80 p-2 rounded-full hover:bg-secondary/90 transition-colors">
        <Globe className="w-6 h-6 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-secondary/95 border-secondary" align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="text-white hover:bg-white/10 cursor-pointer"
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