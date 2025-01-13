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
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                No Strings Chat was created with a simple goal: to make WhatsApp communication 
                easier and more efficient. We understand the need for quick, hassle-free 
                conversations without the requirement of saving phone numbers.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">How It Works</h2>
              <p className="text-muted-foreground">
                Simply enter a phone number, type your message (if desired), and click to open 
                WhatsApp. No contact saving required, no personal data stored. It's that simple!
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Privacy First</h2>
              <p className="text-muted-foreground">
                We prioritize your privacy. No Strings Chat doesn't store any personal information 
                or phone numbers. Everything happens right in your browser.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}