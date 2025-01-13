import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Information We Collect</h2>
            <p>QuickChat Direct does not store any personal information. We do not collect or retain phone numbers, messages, or any other user data.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>Since we don't collect any personal information, there is no information to use or share.</p>
            
            <h2>3. Advertisements</h2>
            <p>We use Google AdMob to display advertisements. AdMob may collect and use data for personalized advertising.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}