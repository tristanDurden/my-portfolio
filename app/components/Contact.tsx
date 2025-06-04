import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendTelegramMessage } from "@/app/lib/telegram";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.email.includes("@") || !formData.message) {
      setStatus("Please provide a valid email and message.");
      setIsLoading(false);
      return;
    }

    try {
      const timestamp = new Date().toLocaleString();
      const message = `
        <b>New Contact Form Submission</b>
        Time: ${timestamp}
        Name: ${formData.name}
        Email: ${formData.email}
        Company: ${formData.company}
        Message: ${formData.message}
      `;

      await sendTelegramMessage(message);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('Detailed error:', error);
      setStatus(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="mb-2">Name</Label>
            <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="company" className="mb-2">Company</Label>
            <Input id="company" placeholder="Company name" value={formData.company} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="message" className="mb-2">Message</Label>
            <Textarea id="message" placeholder="Your message" value={formData.message} onChange={handleChange} />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
          {status && <p className="text-sm text-center text-muted-foreground">{status}</p>}
        </form>
      </div>
    </section>
  );
} 