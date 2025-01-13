import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 p-4 md:p-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg bg-background/80 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              About No Strings Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              No Strings Chat is a revolutionary web application that simplifies your WhatsApp communication. 
              Our platform allows you to initiate WhatsApp conversations without the need to save phone numbers 
              to your contacts, making business and personal communication more efficient than ever.
            </p>
            
            <h2 className="text-xl font-semibold mt-6">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start chats without saving contacts</li>
              <li>Support for both WhatsApp and WhatsApp Business</li>
              <li>International country code selection</li>
              <li>Message templates for quick communication</li>
              <li>Dark mode support for comfortable viewing</li>
              <li>Responsive design for all devices</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We believe in making communication simpler and more accessible. Our mission is to provide a 
              seamless bridge between you and your WhatsApp contacts, eliminating unnecessary steps in the process.
            </p>
            
            <div className="mt-8 text-sm text-muted-foreground">
              Version 1.0.0
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}