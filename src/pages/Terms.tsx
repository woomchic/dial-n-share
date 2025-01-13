import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Terms of Use</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using QuickChat Direct, you accept and agree to be bound by the terms and conditions of this agreement.</p>
            
            <h2>2. Use License</h2>
            <p>This is a free service that allows users to open WhatsApp chats without saving contacts.</p>
            
            <h2>3. Disclaimer</h2>
            <p>The service is provided "as is" without any warranties.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}