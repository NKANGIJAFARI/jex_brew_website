
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    toast({
      title: "Subscribed successfully!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-coffee-light bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-coffee-dark">SUBSCRIBE TO OUR NEWSLETTER FOR UPDATES</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow rounded-r-none"
          />
          <Button type="submit" className="bg-gold hover:bg-gold-dark text-white rounded-l-none">
            SUBSCRIBE
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
