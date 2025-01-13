import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About QuickChat Direct</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>QuickChat Direct is a web application that makes it easy to start WhatsApp conversations without saving phone numbers to your contacts.</p>
            
            <h2>Features</h2>
            <ul>
              <li>Start chats without saving contacts</li>
              <li>Support for WhatsApp Business</li>
              <li>Country code selection</li>
              <li>Optional message templates</li>
            </ul>
            
            <h2>Version</h2>
            <p>1.0.0</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}