import { useState } from "react";
import { Phone, MessageSquare, Send, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleWhatsAppRedirect = (isBusiness: boolean) => {
    if (!phoneNumber.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    const baseUrl = isBusiness ? "https://wa.me/b/" : "https://wa.me/";
    const messageParam = message ? `?text=${encodeURIComponent(message)}` : "";
    const url = `${baseUrl}${phoneNumber.replace(/\D/g, "")}${messageParam}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6">
      <div className="max-w-md mx-auto space-y-8">
        <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              QuickChat Direct
            </CardTitle>
            <CardDescription>
              Connect instantly via WhatsApp without saving contacts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="Enter phone number with country code"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  placeholder="Type your message (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-[100px] p-2 pl-10 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => handleWhatsAppRedirect(false)}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
              >
                <Send className="mr-2 h-5 w-5" />
                Open in WhatsApp
              </Button>
              <Button
                onClick={() => handleWhatsAppRedirect(true)}
                variant="outline"
                className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
              >
                <Send className="mr-2 h-5 w-5" />
                Open in WhatsApp Business
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Your privacy is our priority. We don't store any of your data.
        </div>
      </div>
    </div>
  );
};

export default Index;