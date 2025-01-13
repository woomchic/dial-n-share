import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 p-4 md:p-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg bg-background/80 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Terms of Use
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none space-y-6">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing and using No Strings Chat, you accept and agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">2. Service Description</h2>
              <p>
                No Strings Chat provides a web interface to initiate WhatsApp conversations without saving contacts. 
                We do not guarantee continuous, uninterrupted access to our services.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
              <p>
                Users are responsible for ensuring they have the right to contact the phone numbers they enter. 
                Any misuse of the service is strictly prohibited.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Disclaimer</h2>
              <p>
                The service is provided "as is" without warranties of any kind. We are not responsible for any 
                damages arising from the use of our service.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}