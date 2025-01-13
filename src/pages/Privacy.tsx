import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 p-4 md:p-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg bg-background/80 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none space-y-6">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">1. Information Collection</h2>
              <p>
                No Strings Chat is committed to protecting your privacy. We do not store any personal information, 
                including phone numbers or messages. All data is processed locally on your device.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
              <p>
                Since we don't collect any personal information, there is no information to use or share. 
                Your privacy is guaranteed by design.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. Advertisements</h2>
              <p>
                We use Google AdMob to display advertisements. AdMob may collect and use data for 
                personalized advertising. Please refer to Google's Privacy Policy for more information.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Contact Us</h2>
              <p>
                If you have any questions about our Privacy Policy, please contact us through our Contact page.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}