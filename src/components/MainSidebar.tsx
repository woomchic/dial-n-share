import { Home, FileText, Info, Mail, Share2, Menu, Sun, Moon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

export function MainSidebar() {
  const { theme, setTheme } = useTheme();
  
  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: FileText, label: "Privacy Policy", path: "/privacy" },
    { icon: FileText, label: "Terms", path: "/terms" },
    { icon: Info, label: "About", path: "/about" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "No Strings Chat",
          text: "Connect instantly via WhatsApp without saving contacts!",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-background/95 backdrop-blur-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent animate-fade-in">
            No Strings Chat
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                className="w-full justify-start text-lg font-normal hover:scale-105 transition-transform"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start text-lg font-normal hover:scale-105 transition-transform"
            onClick={handleShare}
          >
            <Share2 className="mr-3 h-5 w-5" />
            Share
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-lg font-normal hover:scale-105 transition-transform"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="mr-3 h-5 w-5" />
            ) : (
              <Moon className="mr-3 h-5 w-5" />
            )}
            Toggle Theme
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}